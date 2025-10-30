import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string) {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    // staleTime: 5000,
    // gcTime: 5000,

    // refetchOnMount: false, // mount 시점에 stale 상태여도 refetch 되지않음
    // refetchOnWindowFocus:false,
    // refetchOnReconnect: false,
    // refetchInterval: false
  });
}
