import { useContext } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const {actions} = useContext(Context)
  const navigate = useNavigate();
 
  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 shadow bg-white">
      <h1>Add a Task</h1>
      <form onSubmit={(e) => actions.handleNewTask(e, navigate)}>
        <div className="mb-4 col-8 container">
          <input 
          onChange={actions.handleChangeTask}
          type="text" 
          maxLength={500}
          id="task" name="task" 
          className="form-control" />
        </div>
        <button className="btn btn-danger" type="submit">
          Send Task
        </button>
      </form>
    </div>
  );
}
export default AddTask;
