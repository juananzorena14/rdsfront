import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../helpers/util";
import '../css/login.css'

const CardBuyApp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = ({ target }) => {
    //validar los formatos
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setState({ ...state, [target.name]: target.value });
  };

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setState({
      number: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
    });
    setTimeout(() => {
      setShowMessage(false);
      //redireccion al home
    }, 3000);
  };

  return (
    <>
    <div className="container-fluid fondo">
      <div className="row d-flex  align-items-center">

      <div className="col-12 col-md offset mb-3">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
      <div className="col-12 col-md">
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Número de Tarjeta"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="my-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre del titular"
              required
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="d-flex gap-2 mb-3">
            <input
              type="tel"
              name="expiry"
              max={"4"}
              value={state.expiry}
              className="form-control"
              placeholder="Fecha de vencimiento"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              required
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-success">Pagar</button>
          </div>
        </form>
        {showMessage && (
          <div className="mt-3">
            <div className="alert alert-success" role="alert">
              El pago está siendo procesado, en breve recibirá la respuesta😉
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
    </>
  );
};

export default CardBuyApp;