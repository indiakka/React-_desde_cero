import React, { Component } from "react";
import './Title.css'

export default class Title extends Component {
  componentDidMount() {
    this.props.setApp("ytrewq");
    // cambiamos el estado al padre
  }
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
