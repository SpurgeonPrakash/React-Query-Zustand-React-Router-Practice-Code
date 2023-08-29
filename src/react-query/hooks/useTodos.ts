import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";
import { Todo } from "../services/todoService";
import todoService from "../services/todoService";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: apiClient.getAll.bind(apiClient),
    queryFn: todoService.getAll,
    staleTime: 10 * 1_000,
  });
};

export default useTodos;
