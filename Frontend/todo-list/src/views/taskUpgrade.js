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
      style={{ borderRadius: "5px", backgroundColor: "#D1D1D1", minHeight: "100vh" }}
      className="container fluid text-center p-5 mt-3 mb-3 bg-secondary"
    >
      <div 
      style={{ borderRadius: "5px", backgroundColor: "#D1D1D1"}}
      className=" container p-3 mb-4 shadow">
        <div className="row p-3">
          <div className="col-md-12">
            <h4>{task}</h4>
            <hr className="border border-dark"></hr>
          </div>
          <div className="col-md-12">
            <h6 style={{ textAlign: "justify" }}>Description:</h6>
            <p style={{ textAlign: "justify" }}>{description}</p>
          </div>
        </div>
      </div>
      <div className="container fluid text-center p-4 mt-3 mb-3 shadow"
      style={{ borderRadius: "5px", backgroundColor: "#D1D1D1"}}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
export default TaskUpgrade;
