import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);
  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        counter: <span className="badge text-bg-secondary me-1">{counter}</span>
        tasks:{" "}
        <span className="badge text-bg-secondary me-1">{tasks.length}</span>
      </div>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
