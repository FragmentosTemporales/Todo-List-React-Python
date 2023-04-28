import { useContext } from "react";
import { Context } from "../store/context";

function TaskList() {
  const { actions, store } = useContext(Context);
  const { tasks } = store;
  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 border">
      <h1>Task List</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((index, task) => (
            <li key={index}>{task.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas pendientes...</p>
      )}
    </div>
  );
}
export default TaskList;