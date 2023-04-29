import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";

function TaskList() {
  const { store, actions } = useContext(Context);
  const { tasks, user_id } = store;

  useEffect(() => {
    actions.getTasks(user_id)
  }, [actions, user_id]);

  let taskItems;
  if (tasks.length > 0) {
    taskItems = tasks.map((task) => (
      <div 
      style={{ borderRadius: "5px"}}
      className="mt-3 border border-warning shadow container d-flex justify-content-between col-8 p-4" key={task.id}>
        <h5>
          {task.task}
        </h5>
        <button 
          onClick={() => actions.deleteTask(task.id)}
          className="btn btn-danger shadow">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    ));
  } else {
    taskItems = <p>No hay tareas para mostrar</p>;
  }

  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 shadow  bg-white">
      <h1>Task List</h1>
      {taskItems}
    </div>
  );
}

export default TaskList;
