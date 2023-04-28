import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container mt-4"
    >
      <div style={{ borderRadius: "5px" }} className="shadow m-4 p-2">
        <div className="m-4">
          <h1 className="pb-4">Sign in</h1>
          <form>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
            </div>
            <div className="form-outline mb-4">
              <input id="password" name="password" className="form-control" />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg text-light mb-4 btn-danger"
              >
                Send
              </button>
            </div>
            <div className="text-center">
              <p>
                Not a member? <Link to="/Register">Registration page</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
