import React, { Component } from "react";
import characters from "../characters.json";
import Form from "./Form";
import Card from "./Card";
import { Container, Row, Col } from "reactstrap";

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
      if (ch.name === name) {
        // cuando el nombre pasado se encuentre
        index = i; // hacemos que se guarde el indice
      }
    });
    if (index !== -1) {
      //cuando encuentre el indice
      copy.splice(
        index,
        1
      ); /* desde la copia con el indice nos borrara un elemento */
      this.setState({ characters: copy }); /* y una vez borrado nos haga
    una copia */
    }
  };

  editCharacter = (name) => {
    let copy = [...this.state.characters]; /* creamos una copia, ya que no se
     puede modificar el original */
    let index = -1; // en caso de que no encuentre nada, que nos lo diga
    copy.forEach((ch, i) => {
      if (ch.name === name) {
        // cuando el nombre pasado se encuentre
        index = i; // hacemos que se guarde el indice
      }
    });
    if (index !== -1) {
      //cuando encuentre el indice
      copy.splice(
        index,
        1
      ); /* desde la copia con el indice nos borrara un elemento */
      this.setState({ characters: copy }); /* y una vez borrado nos haga
    una copia */
    }
  };

  render() {
    return (
      <div>
        <Form addCharacter={this.addCharacter} name="Rick" />
        <Container>
          <Row>
            {" "}
            {this.state.characters.map((ch, i) => 
              <Col>
                {" "}
                <Card
                  rmCharacters={this.rmCharacter}
                  editCharacters={this.editCharacter}
                  key={i}
                  titulo={ch.name}
                  state={ch.status}
                  gender={ch.gender}
                  img={ch.image}
                  chapters={this.extractChapters(ch.episode)}
                />
              </Col>
            )}{" "}
          </Row>
        </Container>
      </div>
    );
  }
}
