import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/quries/use-todos.data";
// import { useTodos } from "@/store/todos";

// const dummyTodos = [
//   { id: 1, content: "Todo 1" },
//   { id: 2, content: "Todo 2" },
//   { id: 3, content: "Todo 3" },
// ];

export default function TodoListPage() {
  // const todos = useTodos();

  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중 입니다 ...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
