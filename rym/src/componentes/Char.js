import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
export default class Char extends Component {
  state = {
    character: null,
  };
  componentDidMount() {
    let id = this.props.find.params.id;

    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((r) => r.json())
      .then((d) => {
        this.setState({ character: d});
      });
  }
  render() {
    if (!this.state.character) {
      return <div></div>;
    }

    let ch = this.state.character;

    return (
      <div>
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
