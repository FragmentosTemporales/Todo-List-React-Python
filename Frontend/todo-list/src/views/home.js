import AddTask from "../components/addTask";
import TaskList from "../components/tasksList";


function Home() {
    return(
        <div 
          style={{ borderRadius: '5px', minHeight: '100vh' }}
          className="container fluid text-center p-5 mt-3 mb-3 border">
          <AddTask/>
          <TaskList/>
        </div>
      )
}
export default Home;