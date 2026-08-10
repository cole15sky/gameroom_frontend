import axios from "axios";

const AUTH_ENDPOINTS = [
  "token/",
  "token/refresh/",
];

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


// Attach JWT access token

API.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("access")
      : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// ---------------------------------------------
// Handle authentication errors
// ---------------------------------------------

API.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response?.status === 401 &&
      typeof window !== "undefined"
    ) {
      const requestUrl: string =
        error.config?.url ?? "";

      const isAuthEndpoint = AUTH_ENDPOINTS.some(
        (endpoint) => requestUrl.includes(endpoint)
      );

      if (!isAuthEndpoint) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        const next = encodeURIComponent(
          window.location.pathname
        );

        window.location.href = `/login?next=${next}`;
      }
    }

    return Promise.reject(error);
  }
);

export default API;