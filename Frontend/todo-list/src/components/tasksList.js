import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
      style={{ backgroundColor: "#D1D1D1", borderRadius: "5px" }}
        className="mt-3 shadow container d-flex justify-content-between col-12 p-4"
        key={task.id}
      >
        <div className="container col-12 col-md-10 text-start">
          <h4 className="p-1 text-center">{task.task}</h4>
          <hr className="border border-dark"></hr>
          <h5 className="">Description:</h5>
          <p className="" style={{ textAlign: "justify" }}>
            {task.description}
          </p>
          <div className="col-12 d-flex justify-content-between">
            <div className="container d-flex justify-content-end p-2">
              <Link
                onClick={() => actions.handleTask(task.id)}
                type="button"
                to="/taskupgrade"
                className="btn btn-secondary shadow"
              >
                <i class="bi bi-pencil-square"></i>
              </Link>
              <button
                onClick={() => actions.deleteTask(task.id)}
                className="btn btn-danger shadow"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  } else {
    taskItems = <p>There are no tasks to show</p>;
  }

  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 shadow"
    style={{ backgroundColor: "#ABABAB"}}>
      <h1 className="">Task List</h1>
      {taskItems}
    </div>
  );
}

export default TaskList;
