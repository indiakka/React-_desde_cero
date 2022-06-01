import React, { Component } from "react";
import "./App.css";

export default class CharacterCard extends Component {
  constructor ( props )
  {
    super( props )
    console.log( "constructor" );
    this.state={app:true}
  }
  componentDidMount ()
  {
      this.setState({app: false})
      console.log("did mount");
    } 
    componentDidUpdate( prevProps, prevState, snapshot ){
      console.log("did update");
}
    componentWillUnmount() {
console.log("will mount"); 
    }
    shouldComponentUpdate( nextProps, nextState ){
      console.log( "should?" );
      return true
    }
    static getDerivedStateFromProps ( props, state )
    {
      console.log("getDerivedStateFromProps");
    return null
    }
    getSnapshotBeforeUpdate ( prevProps, prevState )
    {
      console.log("getSnapshotBeforeUpdate");
    }
    render ()
    {
      console.log("render");
      return (
        <div className="card">
        {this.state.app ? <App /> : <span></span>}  
          <h2>Nombre personaje</h2>
          <p>Estado</p>
          <p>Genero</p>
          <p>Capítulos</p>
        </div>
    );
  };

  

export class App extends Component() {
  componentDidMount ()
  {
    this.setState( { app: false } )
    console.log('APP: did mount')
  }
  componentWillUnmount() {
  console.log("APP: will mount"); 
      }
    render() {
      // nos devuelve algo
      return (
        <div className="rym">
          <h1>Rick y Morty</h1>
        </div>
      );
    }
}

