import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/context";

const NavBar = () => {
  const handleLogout = () => {
    window.location.reload();
  };

  const { store } = useContext(Context);
  const { user_id } = store;

  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const theme = isNightMode ? "night" : "day";
    body.classList.remove(theme === "night" ? "day" : "night");
    body.classList.add(theme);
  }, [isNightMode]);

  return (
    <div className="row sticky-top" id="navbar">
      <nav
        className="navbar navbar-expand-lg  d-flex justify-content-center shadow"
        style={{ backgroundColor: "#393939" }}
      >
        <div className="container">
          <div className="col-6 d-flex justify-content-start">
            <Link className="text-white text-decoration-none" to="/">
              <h2>TODO LIST</h2>
            </Link>
            <h6 className="text-white p-1">v.1.2.</h6>
          </div>
          <div className="container d-flex justify-content-end">
            {user_id && (
              <div className="">
                <button
                  className="btn btn-warning text-dark"
                  onClick={handleLogout}
                >
                  Sign off
                </button>
              </div>
            )}
            <button
              className="btn "
              onClick={() => setIsNightMode(!isNightMode)}
            >
              {isNightMode ? (
                <i className="bi bi-brightness-high text-warning"></i>
              ) : (
                <i className="bi bi-moon text-warning"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
