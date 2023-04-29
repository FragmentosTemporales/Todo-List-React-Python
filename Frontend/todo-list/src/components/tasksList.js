import React, { useContext, useEffect } from "react";
import { Context } from "../store/context";

function TaskList() {
  const { store, actions } = useContext(Context);
  const { tasks, user_id } = store;

  useEffect(() => {
    actions.getTasks(user_id);
  }, [actions, user_id]);

  let taskItems;
  if (tasks.length > 0) {
    taskItems = tasks.map((task) => (
      <div
        style={{ borderRadius: "5px" }}
        className="mt-3 border border-warning shadow container d-flex justify-content-between col-8 p-4"
        key={task.id}
      >
        <div className="container text-start">
          <h5 className="shadow p-1">{task.task}</h5>
          <h6 className=" p-1">Description:</h6>
          <p>{task.description}</p>
        </div>
        <div className="col-2">
        <button
          onClick={() => actions.deleteTask(task.id)}
          className="btn btn-danger shadow"
        >
          <i className="bi bi-trash"></i>
        </button>
        </div>
        
      </div>
    ));
  } else {
    taskItems = <p>There are no tasks to show</p>;
  }

  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 shadow  bg-white">
      <h1>Task List</h1>
      {taskItems}
    </div>
  );
}

export default TaskList;
