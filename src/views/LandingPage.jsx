import "../css/landing.css";
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import imagenlogo from "../assets/descarga1.jpg"


// const LandingPage = () => {
//   return (
//     <Container className="contenedor">
//       <Row className=" row div ">
//         {/* <Col xs={12} md={6} className=" "> */}
//         {/* <div className="div"> */}
//           <div className=" col-md-6">
//             <h1 className="title text-center">
//               ¡Bienvenido a El Rincon del Sabor!
//             </h1>
//             <h4 className="text-center">
//               Donde cada bocado es un viaje de sabores y cada visita es una
//               experiencia
//             </h4>
//             <p className="subtitle text-center">Explorá nuestro sitio web.</p>
//             <div className="caja">
//               <Link type="button" class="btn btn-dark" to="/main">
//                 Empezar ahora
//               </Link>
//             </div>
//           </div>
//           {/* </Col> */}

//           {/* <Col xs={12} md={6} className=" "> */}
//           <div className="imagen col-md-6 ">
//             <img src={portada} alt="Imagen" className="img-fluid h-100" />
//           </div>
//         {/* </div> */}

//         {/* </Col> */}
//       </Row>
//     </Container>
//   );
// };


function LandingPage() {
 return (
    // <div className="landing-page">
      <div className=" Container-fluid landing-page ">
        <Row className="row">
          <Col className=" text-center col ">
            <div className="logo">

            <Image src={imagenlogo} alt="Logo" className="logo" />
            </div>
            <h1 className="company-name">Rincón del Sabor</h1>
            <p className="welcome-text">Donde cada bocado es un viaje de sabores y cada visita es una experiencia</p>
            <div className="d-grid gap-2 col-5 ">
              
            <Button className="button-custom " variant="outline-light" href="/main">Conocenos</Button>
            </div>
          </Col>
          {/* <Col className=" col">

          </Col> */}
        </Row>
      </div>
    //  </div>
 );
}


export default LandingPage;
