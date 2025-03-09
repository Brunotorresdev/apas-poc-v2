// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/apiConfig";

async function getHistoryAssistent(assistentId) {
  const response = await api.get(`/assistent/${assistentId}/history`);
  return response?.data;
}

function useHistoryAssistent(assistentId) {
  return useQuery({
    queryKey: ["fetch-history-assistent", assistentId],
    queryFn: () => getHistoryAssistent(assistentId),
    enabled: !!assistentId,
  });
}

export { getHistoryAssistent, useHistoryAssistent };
