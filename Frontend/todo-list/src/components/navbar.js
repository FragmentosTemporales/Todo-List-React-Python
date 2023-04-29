import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const NavBar = () => {
  const { store } = useContext(Context)
  const { user, tasks } = store;
  const { username } = user;
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger d-flex justify-content-center shadow">
        <div className="container d-flex">
          <div className="col-6 d-flex justify-content-start"><Link className="text-white text-decoration-none" to="/"><h2>TODO LIST</h2></Link></div>
          {username.length > 0 ? <div id="saludo"><h5 className="text-white">Welcome {username}, you have {tasks.length} pending tasks.</h5></div> : null}
        </div>
      </nav >
    </div>
  )
}
export default NavBar;

