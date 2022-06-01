import React, { Component } from "react";
import "./App.css";

export default class CharacterCard extends Component {
  constructor ( props )
  {
    super( props )
  }
    render ()
    {
      return (
        <div className="card">
          <App titulo={this.props.titulo} />
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
          <h1>{this.props.titulo}</h1> 
        </div> /* ponemos this.props para que ponga el titulo "R y M"
      ; pasamos de padre a hijo la props this.props.titulo */
   )
  }
}

