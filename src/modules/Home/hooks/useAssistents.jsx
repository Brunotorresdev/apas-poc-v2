// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/apiConfig";

// import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

async function getAssistents() {
  const response = await api.get(`/assistent/list`);
  return response?.data;
}

function useAssistents() {
  return useQuery({
    queryKey: ["fetch-assistents"],
    queryFn: () => getAssistents(),
  });
}

export { getAssistents, useAssistents };
