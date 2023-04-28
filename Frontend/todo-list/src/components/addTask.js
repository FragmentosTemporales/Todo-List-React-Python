import { useContext } from "react";
import { Context } from "../store/context";

function AddTask() {
  const {actions} = useContext(Context)
 
  return (
    <div className="container fluid text-center p-5 mt-3 mb-3 border">
      <h1>Add a Task</h1>
      <form >
        <div className="form-outline mb-4">
          <input 
          onChange={actions.handleChange}
          type="text" id="task" name="task" className="form-control" />
        </div>
        <button className="btn btn-success" type="submit">
          Send Task
        </button>
      </form>
    </div>
  );
}
export default AddTask;
