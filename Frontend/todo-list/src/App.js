import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./views/login";
import Register from "./views/register";
import injectContext from "./store/context";
import PrivateRoutes from "./utils/PrivateRoutes";
import TaskUpgrade from "./views/taskUpgrade";

function App() {
  return (
    <div className=""
    style={{ backgroundColor: "#5f5f5f" }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
            <Route element={<TaskUpgrade />} path="/taskupgrade" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
