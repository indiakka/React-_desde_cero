import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
export default class Char extends Component {
  state = {
    character: null,
    error: null,
  };
  componentDidMount() {
    let id = this.props.find.params.id;

    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((r) => r.json())
      .then((d) => {
        this.setState({ character: d });
      })
      .catch((error) => {
        console.error("Personaje no encontrado");
        this.setState({ error: "Personaje no encontrado" });
      });
  }
  render() {
    if (!this.state.character) {
      return (
        <div>
          {this.state.error && (
            <div className="alert alert-danger">{this.state.error}</div>
          )}
        </div>
      );
    }

    let ch = this.state.character;

    if (this.state.error) {
    }

    return (
      <div>
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <h1>{ch.name}</h1>
        <Card
          titulo={ch.name}
          state={ch.status}
          gender={ch.gender}
          img={ch.image}
        />
        <Link to="/index">Volver</Link>
      </div>
    );
  }
}
