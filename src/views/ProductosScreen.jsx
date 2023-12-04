import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productsList } from "../api/productsApi";
import { Button } from "react-bootstrap";
import '../css/tarjetasPrincipal.css'

const ProductosScreen = () => {
  const [producEstado, setProducEstado] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams(); //categoria = bebidas
  console.log(categoria);
  useEffect(() => {
    traerProductosFiltrados();
  }, []);

  const traerProductosFiltrados = async () => {
    //ejecutaria getProductos para traer todos los productos
    const { productos } = await productsList();

    const productosFiltrados = productos.filter((produc) => {
      return produc.categoria === categoria;
    });

    setProducEstado(productosFiltrados);
    setLoading(false);
    console.log(productos);
  };

  const agregarAlCarrito = (producto) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Agrega el producto al arreglo.
    carrito.push(producto);
    console.log(carrito);

    // Guarda el arreglo actualizado en la localStorage.
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  };

  return (
    <div className="container">
      <div className="row d-block ">
        {loading ? (
          <div className="col">
            <h3>Cargando info...</h3>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {producEstado.length > 0 ? (
              producEstado.map((producto) => (
                <div className="col" key={producto._id}>
                  <div className="card h-100 tarjeta">
                    <img
                      src={producto.img}
                      className="card-img img-cards"
                      alt={producto.name}
                    />
                    <div className="card-body ">
                      <h5 className="card-title">{producto.name}</h5>
                      <p>{producto.description}</p>
                      <p className="fs-4">{producto.price}</p>

                    </div>
                      <Link to="/carrito">
                    <Button
                      onClick={() => agregarAlCarrito(producto)}
                      className="btn btn-success btn-lg"
                      >
                      Comprar
                    </Button>
                        </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col h-100">
                <h3>No hay productos en esa categoría</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosScreen;
