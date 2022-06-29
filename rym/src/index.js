import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, BrowserRouter, Route} from "react-router-dom";

import Characters from "./componentes/Characters";
import Char from "./componentes/Char";
import ChForm from "./componentes/Form"
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Error404 from "./componentes/Error404";
import {Heading, Foot} from "./componentes/Common";

//Redux
import {createStore} from 'redux'

const initialState = {
  Characters: []
}

//Acciones
function addChar (name, state, gender, chapters){
  return {
    type: "ADD_CHAR",
    payload: {
      name: name,
      state: state,
      gender: gender,
      chapters: chapters
    }
  }
}
//Reducers
 
function appReducer ( state = {}, action )
{
  switch ( action.type )
  {
    case "ADD_CHAR": {
      let newst = { ...state }
      let ch ={ ...action.payload, id: newst.characters.length +1}
      newst.characters.push( ch )
      return newst
    }
      default: return state
  }
}

//Store

const store = createStore(appReducer, initialState)
window.store = store

//End Redux


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Heading />
    <Routes>
      <Route path="/index" element={<Characters />} />
      <Route path="/" element={<Characters />} />
      <Route path="/personajes" element={<Characters />} />
      <Route path="/personaje/:id" element={<Char />} />
      <Route path="/personaje/añadir" element={<ChForm />} />
      <Route element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
