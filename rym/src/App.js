import React, { Component } from "react";
import "./App.css";

export default class CharacterCard extends Component {
  constructor ( props )
  {
    super( props )
    render ()
    {
      console.log("render");
      return (
        <div className="card">
          <h2>Nombre personaje</h2>
          <p>Estado</p>
          <p>Genero</p>
          <p>Capítulos</p>
        </div>
    );
  };

  

export class App extends Component() {
    render() {
      // nos devuelve algo
      return (
        <div className="rym">
          <h1>Rick y Morty</h1>
        </div>
      );
    }
}

