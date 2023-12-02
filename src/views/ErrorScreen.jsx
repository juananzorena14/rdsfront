import React from "react";
import { Link } from "react-router-dom";
import '../css/error.css';

const ErrorScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="error">

      <h1 >Página no encontrada</h1>
      <Link to='/' >Volver al Inicio</Link>
        </div>
      </div>
    </div>
    
  );
};

export default ErrorScreen;
