import React, { Component } from "react";
import { NavLink, useLocation } from "react-router-dom";


export class Heading extends Component {
  render() {
    return (
      <div>
        <h1>Aplicación de Rick & Morty</h1>
        <ul className="menu">
          <li>
            {" "}
            <NavLink to="/personaje/añadir">Formulario</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/index">Personajes</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}


export class MyFoot extends Component {
  
  render() {
    if (useLocation.pathname === "/personaje/añadir") {
      return <div></div>;
    }
    return (
      <div className="foot">
        <a href="/">Condiciones de uso</a>
        <a href="/">Términos legales</a>
      </div>
    );
  }
}
 
