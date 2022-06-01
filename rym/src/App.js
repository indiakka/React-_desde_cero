import React, { Component } from "react";
import "./App.css";

export default class CharacterCard extends Component
{
  constructor ( props )
  {
    super( props )
    this.state = {
      state: this.props.state,
      chapters:this.props.chapters
    }
  }
  componentDidMount ()
  { /* lo utilizamos para cambiar el estado que hayamos
    puesto en index.js*/
    this.setState({state:"dead"})
  }
  render ()
  {
    return (
      <div className="card">
        <App titulo={this.props.titulo} />
        <p>{this.state.state}</p>
        <p>{this.props.gender}</p>
        <p>{this.state.chapters}</p>
      </div>
    );
  };
}
  

export class App extends Component {
  render ()
  {
    // nos devuelve algo
    return (
      <div className="rym">
        <h1>{this.props.titulo}</h1> 
      </div> /* ponemos this.props para que ponga el titulo "R y M"
      ; pasamos de padre a hijo la props this.props.titulo */
   )
  }
}

