import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./views/home"
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './views/login';
import Register from './views/register';
import injectContext from "./store/context";   


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<Register/>} path='/register'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default injectContext(App);
