import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, BrowserRouter, Route, NavLink } from "react-router-dom";

import Characters from "./componentes/Characters";
import Char from "./componentes/Char";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Error404 from "./componentes/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ul className="menu">
      <li>
        {" "}
        <NavLink to="/form">Formulario</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/index">Personajes</NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/index" element={<Characters />} />
      <Route path="/" element={<Characters />} />
      <Route path="/personajes" element={<Characters />} />
      <Route path="/personaje/:id" element={<Char />} />
      <Route element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
