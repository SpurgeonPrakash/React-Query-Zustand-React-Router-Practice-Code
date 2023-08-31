import React, { useReducer } from "react";
import tasksReducer from "./reducers/TasksReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
  children: React.ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
