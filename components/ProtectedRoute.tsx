"use client";

import { useEffect } from "react";
import { useAuth } from "@/features/auth/context";
import { useRouter, usePathname } from "next/navigation";
import type { Role } from "@/types/users";

type Props = {
  children: React.ReactNode;
  allowedRoles?: Role[];
};

const ROLE_ROUTES: Record<Role, string> = {
  ADMIN: "/dashboard/admin",
  AGENT: "/dashboard/agent",
  PLAYER: "/dashboard/player",
};

export default function ProtectedRoute({
  children,
  allowedRoles,
}: Props) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;

    // Not authenticated
    if (!user) {
      const next = encodeURIComponent(pathname);

      router.replace(`/login?next=${next}`);
      return;
    }

    // Authenticated but wrong role
    if (
      allowedRoles &&
      !allowedRoles.includes(user.role)
    ) {
      const target =
        ROLE_ROUTES[user.role] || "/login";

      router.replace(target);
    }
  }, [
    user,
    loading,
    router,
    pathname,
    allowedRoles,
  ]);

  // Loading authentication state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />

          <p className="text-sm text-slate-400">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return null;
  }

  // Wrong role
  if (
    allowedRoles &&
    !allowedRoles.includes(user.role)
  ) {
    return null;
  }

  return <>{children}</>;
}