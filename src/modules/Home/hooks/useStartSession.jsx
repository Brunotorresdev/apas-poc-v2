// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/apiConfig";

async function getStartSession(assistentId) {
  const response = await api.get(`/session/${assistentId}`);
  return response?.data;
}

function useStartSession(assistentId) {
  return useQuery({
    queryKey: ["fetch-start-session", assistentId],
    queryFn: () => getStartSession(assistentId),
    enabled: !!assistentId,
  });
}

export { getStartSession, useStartSession };
