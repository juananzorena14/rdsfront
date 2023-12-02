import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "react-bootstrap/Table";

import "../css/carrito.css";

const Carrito = () => {
  const [miCarrito, setMiCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setMiCarrito(carritoGuardado);
  }, []);

  return (
    <div className="container">
      <div className="row ">
        <div>
          {miCarrito.length === 0 ? (
            <div className=" carrito">
              <h1>Carrito vacio</h1>
              <Link type="button" className="btn btn-dark" to="/productos">
                Comprar
              </Link>
            </div>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {miCarrito.map((producto, index) => (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );

  //     <div className="App">
  //       <h1>Carrito de Compras</h1>
  //       <div>
  //         <h2>Productos Disponibles</h2>
  //         <ul>
  //           {carrito.map((producto) => (
  //             <li key={producto.id}>
  //               {producto.nombre} - ${producto.precio}
  //               <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //         <h2>Carrito</h2>
  //         <ul>
  //           {carrito.map((producto) => (
  //             <li key={producto.id}>
  //               {producto.nombre} - ${producto.precio}
  //             </li>
  //           ))}
  //         </ul>
  //         <p>Total: ${calcularTotal()}</p>
  //       </div>
  //     </div>
  //   );
};

export default Carrito;

// const CarritoScreen = () => {
//   return (
//     <div className="containe">
//         <div className="row ">
//             <div className=" carrito">
//                 <h1>Carrito vacio</h1>
//             <Link type="button" className="btn btn-dark" to='/productos'>
//               Comprar
//             </Link>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default CarritoScreen
