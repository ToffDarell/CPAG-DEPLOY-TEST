const normalizePath = (path = "") => {
  if (!path) {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

const explicitApiBaseUrl = (
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_BASE ||
  (import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL.replace(/\/api\/?$/, "")
    : "") ||
  ""
).replace(/\/$/, "");

const LOCAL_API_ORIGIN = "http://localhost:5000";

const isLocalViteOrigin = () =>
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname) &&
  window.location.port === "5173";

export const API_BASE_URL = explicitApiBaseUrl;

export const buildApiUrl = (path = "") => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${API_BASE_URL}${normalizePath(path)}`;
};

export const buildDirectApiUrl = (path = "") => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = normalizePath(path);

  if (API_BASE_URL) {
    return `${API_BASE_URL}${normalizedPath}`;
  }

  if (isLocalViteOrigin()) {
    return `${LOCAL_API_ORIGIN}${normalizedPath}`;
  }

  return normalizedPath;
};

export const configureAxiosBaseUrl = (axiosInstance) => {
  axiosInstance.defaults.baseURL = API_BASE_URL || "";
};
