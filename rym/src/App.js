import React, { Component } from "react";
import "./App.css";
import characters from './characters.json'


export default class Characters extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = {
    characters: characters.results
    };
  }

  extractChapters = ( chapters ) =>
  {
    let res = []
    chapters.forEach( ch  => 
      res.push( ch.split( "/" ).slice( -1 )[0] )
    )/* añadimos esta función ya que en el .json los episodios
    aparecen como una url, y para que  solo nos muestre solo los numeros
    de los episodios en los que salen */
    return res.join(",")
}

  render ()
  {
    return (
      <div>
        {this.state.characters.map((ch, i) => (
          <CharacterCard
            key={i}
            titulo={ch.name}
            state={ch.status}
            gender={ch.gender}
            chapters={this.extractChapters(ch.episode)}
          />
        ))}
      </div>
    );
  }
}

export  class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
      app: "querty",
    };
  }

  setApp = ( param ) =>
  {
    this.setState( {
      app: param
    })
  }

  kill = ( param, e ) =>
  {
    console.log(e.target.value, param)
    this.setState({ state: e.target.value });
  } 
  render ()
  {
    console.log(this.state.characters)
    return (
      <div className="card">
        {this.state.app}
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

export class App extends Component
{
  componentDidMount ()
  {
    this.props.setApp( "ytrewq" )
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
