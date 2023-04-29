import React, { useContext } from "react";
import { Context } from "../store/context";

function TaskList() {
  const { store } = useContext(Context);
  const { tasks } = store;

  const taskItems = tasks.map((task) => (
    <div className="container d-flex justify-content-between col-8 p-2">
<p key={task.id}>{task.id}.- {task.task}</p>
<button className="btn btn-danger"><i class="bi bi-trash"></i></button>
    </div>
    
  ));

  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 border">
      <h1>Task List</h1>
      {taskItems}
    </div>
  );
}

export default TaskList;
