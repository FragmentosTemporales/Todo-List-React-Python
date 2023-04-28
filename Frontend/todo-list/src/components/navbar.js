import { Link } from "react-router-dom";

const NavBar = () => {

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-danger d-flex justify-content-center shadow">
          <div className="container d-flex">
            <div className="col-6 d-flex justify-content-start"><Link className="text-white text-decoration-none" to="/"><h2>TODO LIST</h2></Link></div>
            <div className="col-6 d-flex justify-content-end"><Link to="/login" className="btn btn-primary">Sign in</Link></div>
          </div>
        </nav >
      </div>
    )
  }
  export default NavBar;