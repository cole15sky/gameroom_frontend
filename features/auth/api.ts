import API from "@/lib/api";


// Login
export const loginUser = async (
  email: string,
  password: string
) => {
  const res = await API.post("token/", {
    email,
    password,
  });

  if (!res.data?.access) {
    throw new Error("Login failed: no access token received");
  }

  return res.data;
};


// Refresh access token
export const refreshToken = async (
  refresh: string
) => {
  const res = await API.post("token/refresh/", {
    refresh,
  });

  if (!res.data?.access) {
    throw new Error(
      "Token refresh failed: no access token received"
    );
  }

  return res.data;
};


// Get currently logged-in user
export const getMe = async () => {
  const res = await API.get("users/me/");

  return res.data;
};