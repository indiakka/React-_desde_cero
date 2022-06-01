import React, { Component } from "react";
import "./App.css";

export default class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
    };
  }
  kill =(e) => {
    this.setState({ state: "Dead" });
  } // al usar una arrow function se le pasa el contexto
  render() {
    return (
      <div className="card">
        <App titulo={this.props.titulo} />
        <p>{this.state.state}</p>
        <p>{this.props.gender}</p>
        <p>{this.state.chapters}</p>
        <button onClick={this.kill}>KILL</button>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    // nos devuelve algo
    return (
      <div className="rym">
        <h1>{this.props.titulo}</h1>
      </div> /* ponemos this.props para que ponga el titulo "R y M"
      ; pasamos de padre a hijo la props this.props.titulo */
    );
  }
}
