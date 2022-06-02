import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      state: this.props.state || "alive",
      gender: this.props.gender || "female",
      chapters: this.props.chapters || ["1", "2"],
    };
  }

  change = (value, e) => {
    let tmp = this.state; //hacemos una copia del estado
    tmp[value] = e.target.value;
    /* creamos una variable temporal con ese valor y el 
    resultado*/
    this.setState({ tmp });
  }; /* con esto cambiaría el valor del form (nombre, estado, etc..) */

  saveCharacter = () => {
    let character = {
      name: this.state.name,
      state: this.state.state,
      gender: this.state.gender,
      episode: this.state.chapters,
    };
    this.props.addCharacter(character);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.change.bind(this, "name")}
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.change.bind(this, "state")}
          placeholder="state"
          value={this.state.state}
        />
        <input
          type="text"
          onChange={this.change.bind(this, "gender")}
          placeholder="gender"
          value={this.state.gender}
        />
        <input
          type="number"
          onChange={this.change.bind(this, "chapters")}
          placeholder="chapters"
          value={this.state.chapters}
        />
        <button onClick={this.saveCharacter}> Guardar</button>
      </div>
    );
  }
}
