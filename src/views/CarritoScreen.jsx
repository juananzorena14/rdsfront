import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

import "../css/carrito.css";

const Carrito = () => {
  const [miCarrito, setMiCarrito] = useState([]);
  const [borrar, setBorrar] = useState([]);

  console.log(miCarrito);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setMiCarrito(carritoGuardado);
  }, []);

  const eliminar = (index) => {
    miCarrito.splice(index,1);
    localStorage.setItem("carrito", JSON.stringify(miCarrito));
    setBorrar(miCarrito);
  };

   const sumaTotal = () => {
    let total = 0;
    console.log(total)
  
    miCarrito.forEach((index) => {
      total = total + index.price;
      // console.log(total)
    });
  
    return total;

  };
  const restaTotal =()=>{
    
  }
 
  

  return (
    <div className="container-fluid ">
      <div className="">
        <div>
          {miCarrito.length === 0 ? (
            <div className="carrito ">
              <h1>Carrito vacio</h1>
              <Link type="button" className="btn btn-dark" to="/main">
                Comprar
              </Link>
            </div>
          ) : (
            <div className=" container mt-4">
              <div className="">
                <h3>Carrito de compras</h3>
                <Table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Descripción</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {miCarrito.map((producto, index) => (
                      <tr key={index}>
                        <td>{producto.name}</td>
                        <td>{producto.description}</td>
                        <td>{producto.price}</td>
                        <Button
                          onClick={() => eliminar(producto)}
                          className="btn btn-success btn-lg"
                        >
                          X
                        </Button>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="suma">
                <p>TOTAL: {sumaTotal()}</p>
                </div>
              </div>
              <div className="col">
              <div className="  ">
                <Link className='btn btn-success boton mb-2 ' to="/pay">Finalizar Compra</Link>
              </div>
              <div className=" caja ">
                <Link className='btn btn-success boton mb-2 ' to="/main">Agregar más</Link>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
