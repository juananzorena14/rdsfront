import "../css/landing.css";
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';


function LandingPage() {
 return (
    <div className="landing-page">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col className="my-auto text-center">
            <Image src="../assets/portadalogo" alt="Logo" className="logo" />
            <h1 className="company-name">Rincón del Sabor</h1>
            <p className="welcome-text">Donde cada bocado es un viaje de sabores y cada visita es una experiencia</p>
            <Button className="button-custom" variant="outline-light" href="/main">Conocenos</Button>
          </Col>
        </Row>
      </Container>
    </div>
 );
}

export default LandingPage;
