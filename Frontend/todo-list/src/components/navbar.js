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
      <nav className="navbar navbar-expand-lg  d-flex justify-content-center shadow"
            style={{ backgroundColor: "#393939" }}>
        <div className="container d-flex">
          <div className="col-6 d-flex justify-content-start">
            <Link className="text-white text-decoration-none" to="/">
              <h2>TODO LIST</h2>
            </Link>
            <h6 className="text-white p-1">v.1.2.</h6>
          </div>
          {user_id && (
            <button className="btn btn-warning text-dark" onClick={handleLogout}>
              Sign off
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
