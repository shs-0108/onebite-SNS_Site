import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,

    // 1.캐시 무효화 -> invalidateQueries -> 직관적이고 구현하기 쉽지만 성능적이슈 있음
    // 2.수정 요청의 응답값 활용 -> onSuccess -> 빠른 반응을 보여주기 아쉬움
    // 3.낙관적 업데이트 -> onMutate -> 반응은 빠르지만 요청 실패 시 데이터를 원상복구 시켜줘야함, 유저에게 혼란을 일으킬 수 있음

    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      });
    },
  });
}
