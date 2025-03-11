import { useMutation } from "@tanstack/react-query";
import apiV2 from "../../../api/apiConfigV2";

const endSession = async (payload) => {
  const { data } = await apiV2.post("/session/close", payload);

  return data;
};

export const useEndSession = () => {
  return useMutation({
    mutationFn: (payload) => endSession(payload),
  });
};
