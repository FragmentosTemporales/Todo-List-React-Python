import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const NavBar = () => {
  const handleLogout = () => {
    window.location.reload();
  };

  const { store } = useContext(Context);
  const { user_id } = store;

  return (
    <div className="row sticky-top" id="navbar">
      <nav className="navbar navbar-expand-lg bg-danger d-flex justify-content-center shadow">
        <div className="container d-flex">
          <div className="col-6 d-flex justify-content-start">
            <Link className="text-white text-decoration-none" to="/">
              <h2>TODO LIST</h2>
            </Link>
            <h6 className="text-white p-1">v.1.0.</h6>
          </div>
          {user_id && (
            <button className="btn btn-info text-white" onClick={handleLogout}>
              Sign off
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
