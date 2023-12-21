import React, { useState } from "react";
import RouterPrimary from "./router/RouterPrimary";
import ProtectedRoutes from "./router/ProtectedRoutes";
import LoginScreen from "./views/LoginScreen";
import RegistroUsuarioApp from "./components/RegistroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardBuyApp from "./components/Pay";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainScreen from "./views/MainScreen";
import ErrorScreen from "./views/ErrorScreen";
import CarritoScreen from "./views/CarritoScreen";
import AdminScreen from "./views/AdminScreen";
import ProductosScreen from "./views/ProductosScreen";
import './css/body.css'


function App() {
  const [estadoLogin, setEstadoLogin] = useState (false)

  return (
    <div className="main-container d-flex flex-column">
    <BrowserRouter>
      <Navbar estadoLogin={estadoLogin} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pay" element={<CardBuyApp/>}/>
        {/* <Route path="/carrito" element={<CarritoScreen/>}/> */}
        <Route path="/register" element={<RegistroUsuarioApp />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/login" element={<LoginScreen setEstadoLogin={setEstadoLogin} />} />
        <Route path="/admin" element={<ProtectedRoutes estadoLogin={estadoLogin}><AdminScreen/></ProtectedRoutes>} />
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/productos/:categoria" element={<ProductosScreen />} />
        <Route path="/carrito" element={<CarritoScreen setEstadoLogin={setEstadoLogin} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
