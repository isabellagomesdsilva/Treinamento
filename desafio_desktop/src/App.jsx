import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Login/Login";
import { Register } from "./components/Cadastro/Register";
import { Inicio } from "./components/Inicio/Inicio/Inicio";

export function App() {
  return (
    <div className='routes' style={{width: 100 + "%"}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='inicio' element={<Inicio/>} />
      </Routes>
    </div>
  );
}
