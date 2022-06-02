import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
export default class ChForm extends Component {
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
      <Form>
        <Input
          type="text"
          onChange={this.change.bind(this, "name")}
          placeholder="name"
          value={this.state.name}
        />
        <Input
          type="text"
          onChange={this.change.bind(this, "state")}
          placeholder="state"
          value={this.state.state}
        />
        <Input
          type="text"
          onChange={this.change.bind(this, "gender")}
          placeholder="gender"
          value={this.state.gender}
        />
        <Input
          type="number"
          onChange={this.change.bind(this, "chapters")}
          placeholder="chapters"
          value={this.state.chapters}
        />
        <Button onClick={this.saveCharacter}> Guardar</Button>
      </Form>
    );
  }
}
