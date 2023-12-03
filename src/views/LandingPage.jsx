import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import portada from "../assets/portad.jpg";
import "../css/landing.css";

const LandingPage = () => {
  return (
    <Container className="contenedor">
      <Row className=" row div">
        {/* <Col xs={12} md={6} className=" "> */}
        {/* <div className="div"> */}
          <div className=" col-md-6">
            <h1 className="title text-center">
              ¡Bienvenido a El Rincon del Sabor!
            </h1>
            <h4 className="text-center">
              Donde cada bocado es un viaje de sabores y cada visita es una
              experiencia
            </h4>
            <p className="subtitle text-center">Explorá nuestro sitio web.</p>
            <div className="boton">
              <Link type="button" class="btn btn-dark" to="/main">
                Empezar ahora
              </Link>
            </div>
          </div>
          {/* </Col> */}

          {/* <Col xs={12} md={6} className=" "> */}
          <div className="imagen col-md-6">
            <img src={portada} alt="Imagen" className="img-fluid" />
          </div>
        {/* </div> */}

        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default LandingPage;
