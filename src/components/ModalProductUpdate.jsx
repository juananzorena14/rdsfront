import React, { useState, useEffect } from "react";
//Importar funcion para actualizar producto
import { productUpdate } from "../api/productsApi";
//importar función para traer categorías
import { categoryList } from "../api/categoriasApi";

import Modal from "react-bootstrap/Modal";

const ModalProductUpdate = ({show, handleClose, producto, setProducto}) => {
    const [datosCategorias, setDatosCategorias] = useState(null);

    useEffect(() => {
        traerCategorias();
    }, []);

    const traerCategorias = async () => {
        const {categorias} = await categoryList();
        setDatosCategorias(categorias);
    };

    const handleChange = (e) => {
        if (e.target.name === "state") {
            setProducto({...producto, [e.target.name]: e.target.checked});
        } else {
            setProducto({...producto, [e.target.name]: e.target.value});
        }
    };
    const actualizar = async (e) => {
        //prevenir el refresh de submit
        e.preventDefault();
    
        //llamar funcion para actualizar
        await productUpdate(producto._id, producto);
    
        //cerrar el modal
        handleClose();
      };
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Actualizar {producto?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={actualizar}
              className="bg-light text-dark p-3 rounded w-100"
            >
              <section className="row">
                <fieldset className="col-12 ">
                  <label htmlFor="name-input" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    className="form-control"
                    value={producto.name}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
    
                <fieldset className="col-12">
                  <label htmlFor="description-input" className="form-label">
                    Descripcion
                  </label>
                  <textarea
                    type="text"
                    id="description-input"
                    name="description"
                    className="form-control"
                    value={producto.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </fieldset>
                <fieldset className="col-12 ">
                  <label htmlFor="price-input" className="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    id="price-input"
                    name="price"
                    className="form-control"
                    value={producto.price}
                    onChange={handleChange}
                    required
                  />
                </fieldset>
    
                <fieldset className="col-12">
                  <label htmlFor="categoria-input" className="form-label">
                    Categoría
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    name="categoria"
                  >
                    <option value="">Elegir Categoría</option>
                    {datosCategorias?.length > 0 &&
                      datosCategorias.map((categoria) => (
                        <option key={categoria._id} value={categoria._id}>
                          {categoria.name}
                        </option>
                      ))}
                  </select>
                </fieldset>
                <fieldset className="col-12 ">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="state"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={producto.state}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Estado</label>
                  </div>
                </fieldset>
              </section>
              <div className="text-end mt-2">
                <button type="submit" className="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      );
};

export default ModalProductUpdate;