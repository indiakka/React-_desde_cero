import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";


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
/*

class MyFoot extends Component {
  
  render() {
    if ( this.props.location.pathname === "/personaje/añadir" )
    {
      return <div></div>
    }
      return (
        <div className="foot">
          <a href="/">Condiciones de uso</a>
          <a href="/">Terminos legales</a>
        </div>
      );
  }
}
export const Foot = withRouter(MyFoot);
*/