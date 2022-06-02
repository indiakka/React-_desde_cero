import React, { Component } from "react";
import Title from "./Title";
import {AiFillHeart ,AiOutlineQuestion} from 'react-icons/ai'
import { GiCoffin } from "react-icons/gi";
import { FaMale, FaFemale } from "react-icons/fa";

import "./Card.css";


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
      app: "querty",
    };
  }

  setApp = (param) => {
    this.setState({
      app: param,
    });
  };

  kill = (param, e) => {
    console.log(e.target.value, param);
    this.setState({ state: e.target.value });
  };

  rmCharacter = (e) => {
    this.props.rmCharacter(this.props.titulo);
  };

  editCharacter = (e) => {
    this.props.editCharacter(this.props.titulo);
  };

  render ()
  {
    
    return (
      <div className="card">
        <button onClick={this.rmCharacter}>Eliminar</button>
        <Title setApp={this.setApp} titulo={this.props.titulo} />
        <p>
          {this.state.state === "Alive" ? (
            <AiFillHeart icon="heart" />
          ) : this.state.state === "Dead" ? (
            <GiCoffin icon="coffin" />
          ) : (
            <AiOutlineQuestion icon="question" />
          )}
        </p>
        <p>
          {this.props.gender === "Male" ? (
            <FaMale icon="male" />
          ) : this.props.gender === "Female" ? (
            <FaFemale icon="female" />
          ) : (
            <AiOutlineQuestion icon="question" />
          )}
        </p>
        <p>{this.state.chapters}</p>
        <button onClick={this.editCharacter}>Editar</button>
        <br />
        <input onChange={this.kill.bind(this, "qwerty")} />
      </div>
      /* al usar target.value del evento, con el 
      input, creamos un cuadro de texto en el que 
      al escribir cambiamos el estado */
    );
  }
}
