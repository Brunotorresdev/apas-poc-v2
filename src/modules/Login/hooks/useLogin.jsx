import { useMutation } from "@tanstack/react-query";
import api from "../../../api/apiConfig";

const login = async (payload) => {
  const { data } = await api.post("/auth/login", payload);

  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload) => login(payload),
  });
};
