// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/apiConfig";
import apiV2 from "../../../api/apiConfigV2";

async function getHistoryAssistent(assistentId) {
  const response = await apiV2.get(`/assistent/${assistentId}/history`);
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
