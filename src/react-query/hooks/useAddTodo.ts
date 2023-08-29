import axios from "axios";
import { Todo } from "./useTodos";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
  previousTodos: Todo[];
}
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => {
      return axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data);
    },
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // savedTodo is the todo We get from the response
      // new todo is the variable, the post body of request(todo object)
      // console.log(savedTodo);
      // APPROACH 1: Invalidate the cache
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS,
      // });
      // APPROACH 2: Updating the data in cache directly
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
      //   savedTodo,
      //   ...(todos || []),
      // ]);
      // if (ref.current) ref.current.value = "";

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) {
        return;
      }
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
