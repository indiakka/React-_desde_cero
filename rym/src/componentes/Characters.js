import React, { Component } from "react";
import Card from "./Card";
import { Container, Row, Col, Input } from "reactstrap";
import { Link } from "react-router-dom";
import {  actions} from "./store";
import { connect } from "react-redux";

export  class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter_name: "",
    };
  }

  componentDidMount() {
    if ( this.props.characters.length === 0 )
    {
      setTimeout(()=> {
        fetch( "https://rickandmortyapi.com/api/character/" )
          .then( ( r ) => r.json() )
          .then( ( d ) =>
          {
            this.props.set( d.results )
          });
        },3000);
    }
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

  filterCharacters = (e) => {
    let value = "";
    if (e.target.value.length >= 3) {
      value = e.target.value;
    }
    this.setState({ filter_name: value });
  };

  render() {
    return (
      <div>
        <br />

        <Input
          onChange={this.filterCharacters}
          placeholder="Filtrar personaje por nombre"
        />
        <br />
        {this.props.characters.length === 0 && 
          <div className="loading">Cargando...</div>
        }
        <Container>
          <Row>
            {this.props.characters.map((ch, i) => {
              if (ch.name.includes(this.state.filter_name)) {
                return (
                  <Col key={i}>
                    <Link to={"/personaje/" + ch.id}>
                      <Card
                        key={i}
                        rmCharacters={this.rmCharacter}
                        editCharacters={this.editCharacter}
                        titulo={ch.name}
                        state={ch.status}
                        gender={ch.gender}
                        img={ch.image}
                        chapters={this.extractChapters(ch.episode)}
                      />
                    </Link>
                  </Col>
                );
              } else {
                return <div></div>;
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapState = (state) => {
  return { characters: state.characters };
};

const mapActions = { set: actions.setChar };

const characters = connect(mapState, mapActions)(Characters);

export default characters