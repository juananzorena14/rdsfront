import React, { useState } from "react";
//custom hook
import useGetProducts from "../hooks/useGetProducts";
//importar funcion para borrar producto
import { productDelete } from "../api/productsApi";
//Importar componente de paginación
import BtnPaginationProd from "../components/BtnPaginationProd";
//Importar componente modal para actualizar producto
import ModalProductUpdate from "./ModalProductUpdate";

const ProductosAdmin = () => {
    const [pagina, setPagina] = useState(0); //desde

//CARGAR PRODUCTOS
const {datos} = useGetProducts(pagina);

//MANEJO DEL MODAL
const [show, setShow] = useState(false); 
const [producto, setProducto] = useState(null); //datos del producto a actualizar

    //FUNCIÓN PARA CERRAR MODAL 
    const handleClose = () => { 
    setProducto(null);
    setShow(false);
    };

    //FUNCIÓN PARA ABRIR MODAL 
    const handleShow = (datos) => {
    setProducto(datos);
    setShow(true);
    };

    //FUNCIÓN PARA MODIFICAR PRODUCTO
    const modificarProducto = (datos) => {
    setProducto(datos);
    };

  const borrarProducto = async (id) => {
    const validar = confirm("Está seguro que quiere borrar el producto?");
    if (validar) {
      const respuesta = await productDelete(id);
      console.log(respuesta);
    }
  };

//FUNCIONES DE PAGINACIÓN
const nextPage = () => {
    //total de los productos = 8 / 2 página
    const totalPages = datos.total / 5;
    console.log(totalPages);
    if (pagina + 1 < totalPages) {
      setPagina(pagina + 5);
    }
};

const backPage = () => {
    if (pagina >= 5) {
      setPagina(pagina - 5);
    }
};
  //---------------------------------------------

  return (
    <>
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* Cargar tabla con los datos y botones para borrar y actualizar  */}
            {datos?.productos.length > 0 &&
              datos.productos.map((producto) => (
                <tr key={producto._id}>
                  <td>{producto.name}</td>
                  <td>{producto.categoria.name}</td>
                  <td>{producto.description}</td>
                  <td>{producto.price}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => borrarProducto(producto._id)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleShow(producto)}
                      >
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/*Componente del Modal con sus respectivos Props */} 
        {producto && (
          <ModalProductUpdate
            show={show}
            handleClose={handleClose}
            producto={producto}
            setProducto={modificarProducto}
          />
        )}
      </div>
      <div className="col">
        {/* Componente de paginación con sus funciones  */}
        <BtnPaginationProd nextPage={nextPage} backPage={backPage} />
      </div>
    </>
  );
};

export default ProductosAdmin;
