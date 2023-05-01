import AddTask from "../components/addTask";
import TaskList from "../components/tasksList";
import { useContext } from "react";
import { Context } from "../store/context";

function Home() {
  const { store } = useContext(Context)
  const { user, tasks } = store;
  const { username } = user;

  return (
  
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container fluid text-center p-5 mt-3 mb-3 bg-light"
    >
      {username.length > 0 ? <div id="saludo"><h5 className="text-Dark p-3">Welcome {username}, you have {tasks.length} pending tasks.</h5></div> : null}
      <AddTask />
      <TaskList />
    </div>
  );
}
export default Home;
