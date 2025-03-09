import axios from "axios";
import StorageHelper from "../utils/StorageHelper";

const apiUrl = `${import.meta.env.VITE_API_URL}/v1`;

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = StorageHelper.getValue("accessToken", "");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Usuário não autorizado! Faça login novamente.");
      window.localStorage.setItem("accessToken", null);
      window.localStorage.setItem("auth-storage", null);

      window.location.href = `${window.location.origin}/login`;
    }
    return Promise.reject(error);
  }
);

export default api;
