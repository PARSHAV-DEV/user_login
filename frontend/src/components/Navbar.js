import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // check login

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">

        <Link to="/" className="navbar-brand">
          Account Manager
        </Link>

        <div>
          {/* If NOT logged in → show Login + Register */}
          {!token && (
            <>
              <Link to="/" className="btn btn-outline-light me-2">Login</Link>
              <Link to="/register" className="btn btn-outline-light">Register</Link>
            </>
          )}

          {/* If logged in → show Logout */}
          {token && (
            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
