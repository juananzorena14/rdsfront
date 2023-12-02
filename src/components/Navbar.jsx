import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import imagenPortada from "../assets/descarga1.jpg"
import ModalLogin from "../components/ModalLogin"

const Navbar = () => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-css ">
      <div className="container-fluid div-a">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link fw-bold" : "nav-link"
          }
          to="/"
        ><div className="imgLogo">
          <img src={imagenPortada} alt="portada" />
          </div>
        </NavLink>
        <button
          className="navbar-toggler light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon menu-icon "></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                }
                aria-current="page"
                to="/carrito"
              >
                Pedidos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                } to='/register'
              >
                Registrarse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold" : "nav-link"
                }
                to="/login"
              >
                Iniciar Sesión
              </NavLink>
            </li>
           

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
