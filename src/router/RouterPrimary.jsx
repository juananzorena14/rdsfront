import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardBuyApp from '../components/Pay'
import ErrorScreen from '../views/ErrorScreen'
import LandingPage from '../views/LandingPage'
import MainScreen from '../views/MainScreen'
import RegistroUsuarioApp from '../components/RegistroUsuario'
import LoginScreen from '../views/LoginScreen'
import AdminScreen from '../views/AdminScreen'


const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/main" element={<MainScreen/>}/>
      <Route path="/register" element={<RegistroUsuarioApp/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/pay" element={<CardBuyApp/>}/>
      <Route path="/admin" element={<AdminScreen/>}/>
      <Route path="/" element={<LandingPage/>}/>

    </Routes>
  )
}

export default RouterPrimary