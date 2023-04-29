import AddTask from "../components/addTask";
import TaskList from "../components/tasksList";

function Home() {
  const handleLogout = () => {

    window.location.reload();
  };
  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container fluid text-center p-5 mt-3 mb-3 bg-light"
    >
      <AddTask />
      <TaskList />
      <button 
      className="btn btn-lg btn-warning text-white"
      onClick={handleLogout}>Sign off</button>
    </div>
  );
}
export default Home;
