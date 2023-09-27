import { useEffect, useState } from "react";
import Section from "./Section";

const ListTask = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "todo");
    const fInProgress = tasks.filter((task) => task.status === "inprogress");
    const fClosed = tasks.filter((task) => task.status === "closed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "closed"];

  return (
    <div>
      <h2>Hello from List Tasks</h2>
      {statuses.map((status, index) => (
        <Section key={index} status={status}></Section>
      ))}
    </div>
  );
};

export default ListTask;
