import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Login = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container mt-4 "
    >
      <div style={{ backgroundColor: "#ABABAB" }} className="shadow m-4 p-5">
        <h1 className="text-center">Sign in</h1>
        <div
          style={{ borderRadius: "5px", backgroundColor: "#D1D1D1" }}
          className="m-4 p-3"
        >
          <form onSubmit={(e) => actions.handleUserLogin(e, navigate)}>
            <div className="row d-flex justify-content-around mt-4">
              <div className="form-outline mb-4 col-8">
              <input
                onChange={actions.handleChange}
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-outline mb-4 col-8">
              <input
                onChange={actions.handleChange}
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn text-light mb-4 btn-danger">
                Send
              </button>
            </div>
            <div className="text-center">
              <p>
                <Link to="/Register">Registration page</Link>
              </p>
            </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
