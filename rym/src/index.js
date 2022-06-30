import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Characters from "./componentes/Characters";
import Char from "./componentes/Char";
import ChForm from "./componentes/Form";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./componentes/Error404";
import { Heading, Foot } from "./componentes/Common";
import { Provider } from "react-redux";
import { store } from "./componentes/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
    <Provider store={store}>
      <Heading />
      <Routes>
        
      <Route path="/index" element={<Characters />} />
      <Route path="/" element={<Characters />} />
      <Route path="/personajes" element={<Characters />} />
      <Route path="/personaje/:id" element={<Char />} />
      <Route path="/personaje/añadir" element={<ChForm />} />
        <Route element={<Error404 />} />
        
      </Routes>
      < Foot />
    </Provider>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
