import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import tasksReducer from "./state-management/tasks/TasksReducer";
import TasksContext from "./state-management/tasks/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";
import { TasksProvider } from "./state-management/tasks";
// import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
