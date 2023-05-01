import { useContext } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

function TaskUpgrade() {
  const { store, actions } = useContext(Context);
  const { taskInfo } = store;
  const { description, task, id } = taskInfo;
  const navigate = useNavigate();
  let taskId = id;

  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container fluid text-center p-5 mt-3 mb-3 bg-light"
    >
      <div className=" container p-3 mb-4 shadow bg-white">
        <div className="row">
          <div className="col-md-12">
            <h4>{task}</h4>
            <hr className="border border-dark"></hr>
          </div>
          <div className="col-md-12">
            Description:<h6>{description}</h6>
          </div>
        </div>
      </div>
      <div className="container fluid text-center p-4 mt-3 mb-3 shadow bg-white">
        <h1 className="p-4">Upgrade task</h1>
        <form onSubmit={(e) => actions.putTask(e, navigate, taskId)}>
          <div className="mb-4 col-12 col-md-8 container">
            <input
              required
              onChange={actions.handleChangeTask}
              type="text"
              placeholder="Task"
              maxLength={100}
              id="task"
              name="task"
              className="form-control"
            />
          </div>
          <div className="mb-4 col-12 col-md-8 container">
            <input
              required
              onChange={actions.handleChangeTask}
              type="text"
              placeholder="Description"
              maxLength={500}
              id="description"
              name="description"
              className="form-control"
            />
          </div>
          <button className="btn btn-danger" type="submit">
            <i class="bi bi-arrow-left-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
export default TaskUpgrade;
