import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//import imagenPortada from "../assets/portad.jpg";
import "../css/tarjetasPrincipal.css";
import {categoryList} from "../api/categoriasApi"


const MainScreen = () => {
  const [categoriaEstado, setCategoriaEstado] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoria} = useParams(); //categoria = bebidas

  useEffect(() => {
    traerCategorias();
  }, []);

  const traerCategorias = async () => {
    const {categorias} = await categoryList();

    const categoriasFiltradas = categorias.filter((categ) => {
      return categ.categoria === categoria;
    });

    setCategoriaEstado(categoriasFiltradas);
    setLoading(false);
    console.log(categorias);
  };


  //   const agregarAlCarrito=(producto)=>{
  //     const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
   
  //     // Agrega el producto al arreglo.
  //     carrito.push(producto);
   
  //     // Guarda el arreglo actualizado en la localStorage.
  //     localStorage.setItem('carrito', JSON.stringify(carrito));
  //  }

  


// const confirmarCompra=()=> {
//     // Mostrar un cuadro de diálogo con un mensaje y botones "Aceptar" y "Cancelar"
//     const respuesta = confirm("¿Quieres seguir comprando?");
  
//     // Verificar la respuesta del usuario
//     if (respuesta) {
//       // El usuario hizo clic en "Aceptar"
//       alert("¡Continúa comprando!");
//     } else {
//       // El usuario hizo clic en "Cancelar" o cerró el cuadro de diálogo
//       alert("Gracias por tu compra");
//     }
//   } 

  return (
    <div className="container-fluid">
      <div className=" d-block ">
{/* -----imagen portada-------- */}
        <div className="col-12 col-md portada   ">
          <div className=" col-4 col-md-5 mt-3 ">
            <h3 className="text-end texto fst-italic fs-2">
              El Rincon del Sabor
            </h3>
            <p className="text-end texto fst-italic fs-4">
              Donde cada bocado es un viaje de sabores.
            </p>
          </div>
        </div>
{/* ----------------------- */}

        {loading ? (
          <div className="col">
            <h3>Cargando info...</h3>
          </div>
        ) : (
          <div className="row caja row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            {categoriaEstado.length > 0 ? (
              categoriaEstado.map((categoria) => (
                <div className="col" key={categoria._id}>
                  <div className="card  tarjeta">
                    <img
                      src={categoria.img}
                      className="card-img-top img-cards"
                      alt={categoria.name}
                    />
                    <div className="card-body ">
                      <h5 className="card-title">{categoria.name}</h5>
                    </div>

                    <div className="caja">
                      <Link  to={`/productos/${categoria.name}`} className="btn btn-success mb-2 btn-lg ms-4 boton">
                        Ver más...
                      </Link>
                    </div>
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

export default MainScreen;