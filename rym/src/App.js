import React, { Component } from "react";
import "./App.css";
import characters from "./characters.json";

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters.results,
    };
  }

  extractChapters = (chapters) => {
    let res = [];
    chapters.forEach((ch) =>
      res.push(ch.split("/").slice(-1)[0])
    ); /* añadimos esta función ya que en el .json los episodios
    aparecen como una url, y para que  solo nos muestre solo los numeros
    de los episodios en los que salen */
    return res.join(",");
  };

  addCharacter = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  }; /* se crea la función para que en el formulario al darle
a guardar, se guarde el nuevo personaje */

  rmCharacter = (name) => {
    let copy = [...this.state.characters]; /* creamos una copia, ya que no se
     puede modificar el original */
    let index = -1; // en caso de que no encuentre nada, que nos lo diga
    copy.forEach((ch, i) => { 
      if (ch.name === name) { // cuando el nombre pasado se encuentre
        index = i; // hacemos que se guarde el indice
      }
    });
    if (index !== -1) { //cuando encuentre el indice
      copy.splice(index, 1); /* desde la copia con el indice nos borrara un elemento */
      this.setState({ characters: copy }); /* y una vez borrado nos haga
    una copia */
    }
  };

  render() {
    return (
      <div>
        <Form addCharacter={this.addCharacter} name="Rick" />
        {this.state.characters.map((ch, i) => (
          <CharacterCard
            rmCharacters={this.rmCharacter}
            key={i}
            titulo={ch.name}
            state={ch.state}
            gender={ch.gender}
            chapters={this.extractChapters(ch.episode)}
          />
        ))}
      </div>
    );
  }
}

export class CharacterCard extends Component {
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

  render() {
    console.log(this.state.characters);
    return (
      <div className="card">
        <button onClick={this.rmCharacter}>Eliminar</button>
        <App setApp={this.setApp} titulo={this.props.titulo} />
        <p>{this.state.state}</p>
        <p>{this.props.gender}</p>
        <p>{this.state.chapters}</p>
        <input onChange={this.kill.bind(this, "qwerty")} />
      </div>
      /* al usar target.value del evento, con el 
      input, creamos un cuadro de texto en el que 
      al escribir cambiamos el estado */
    );
  }
}

export class App extends Component {
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

export class Form extends Component {
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
