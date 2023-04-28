import { Link } from "react-router-dom";

const Register = () => {

  return (
    <div
      style={{ borderRadius: "5px", minHeight: "100vh" }}
      className="container mt-4"
    >
      <div style={{ borderRadius: "5px" }} className="shadow m-4 p-2">
        <div className="m-4">
          <h1>Registration page</h1>
          <form>
            <div className="row d-flex justify-content-around p-2">
              <div className="form-outline mb-4 col-6">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  maxLength={50}
                  required
                  placeholder="Máximo 50 caracteres"
                />
                <label className="form-label" htmlFor="name">
                  Username
                </label>
              </div>
            </div>
            <div className="row d-flex justify-content-around p-2">
              <div className="form-outline mb-4 col-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  maxLength={50}
                  required
                  placeholder="Máximo 50 caracteres"
                />
                <label className="form-label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-outline mb-4 col-6">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  maxLength={10}
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg btn-danger text-light"
              >
                Send
              </button>
            </div>
            <div className="text-center pt-4">
              <p>
                a member? <Link to="/Login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
