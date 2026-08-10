"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import { loginUser, getMe } from "./api";
import type { User } from "@/types/users";


// AUTH CONTEXT TYPE
type AuthContextType = {
  user: User | null;

  login: (
    email: string,
    password: string,
    redirectTo?: string
  ) => Promise<void>;

  logout: () => void;

  loading: boolean;
};


// CONTEXT

const AuthContext = createContext<AuthContextType>({
  user: null,

  login: async () => {},

  logout: () => {},

  loading: true,
});


// HOOK

export const useAuth = () => useContext(AuthContext);

// ROLE ROUTES

const ROLE_ROUTES: Record<string, string> = {
  ADMIN: "/dashboard/admin",
  AGENT: "/dashboard/agent",
  PLAYER: "/dashboard/player",
};


// PROVIDER

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  const router = useRouter();


  // LOGIN

  const login = async (
    email: string,
    password: string,
    redirectTo?: string
  ): Promise<void> => {
    const data = await loginUser(
      email,
      password
    );

    // Store JWT tokens
    localStorage.setItem(
      "access",
      data.access
    );

    localStorage.setItem(
      "refresh",
      data.refresh
    );

    // Get authenticated user
    const me = await getMe();

    const userObj: User =
      me?.data ?? me;

    setUser(userObj);


    // Redirect

    if (redirectTo) {
      router.push(redirectTo);
      return;
    }

    router.push(
      ROLE_ROUTES[userObj.role] ?? "/login"
    );
  };


  // LOGOUT

  const logout = () => {
    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    setUser(null);

    router.push("/login");
  };


  // RESTORE SESSION

  useEffect(() => {
    const token =
      localStorage.getItem("access");

    if (!token) {
      setLoading(false);
      return;
    }


    getMe()
      .then((res) => {
        const userObj: User =
          res?.data ?? res;

        setUser(userObj);
      })
      .catch(() => {
        localStorage.removeItem("access");

        localStorage.removeItem("refresh");

        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  // PROVIDER
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}