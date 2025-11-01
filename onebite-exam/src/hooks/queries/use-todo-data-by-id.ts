import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todo.detail(id),
    enabled: type === "DETAIL",

    // staleTime: 5000,
    // gcTime: 5000,

    // refetchOnMount: false, // mount 시점에 stale 상태여도 refetch 되지않음
    // refetchOnWindowFocus:false,
    // refetchOnReconnect: false,
    // refetchInterval: false
  });
}
