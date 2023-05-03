import AddTask from "../components/addTask";
import TaskList from "../components/tasksList";
import { useContext } from "react";
import { Context } from "../store/context";

function Home() {
  const { store } = useContext(Context);
  const { user, tasks } = store;
  const { username } = user;

  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container fluid text-center"
    >
      {username.length > 0 ? (
        <div className="pt-3">
          <h5 className=" p-3">
            Welcome {username}, you have {tasks.length} pending tasks.
          </h5>
        </div>
      ) : null}
      <AddTask />
      <TaskList />
    </div>
  );
}
export default Home;
