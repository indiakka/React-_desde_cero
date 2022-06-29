//Redux

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const initialState = {
  Characters: [],
};

//Acciones
//para añadir personajes desde consola
export const actions = {
  addChar: (name, state, gender, chapters) => {
    return {
      type: "ADD_CHAR",
      payload: {
        name: name,
        state: state,
        gender: gender,
        episode: chapters,
      },
    };
  },

  setChar: (characters) => {
    return {
      type: "SET_CHAR",
      payload: {
        characters: characters,
      },
    };
  },
  //incremento y decremento
  incr: () => {
    return { type: "INCR" };
  },

  decr: () => {
    return { type: "DECR" };
  },
};
//Reducers

function charReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_CHAR": {
      let newst = { ...state };
      let ch = { ...action.payload, id: newst.length + 1 };
      newst.push(ch);
      return newst;
    }
    case "SET_CHAR": {
      return action.payload.characters;
    }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  characters: charReducer,
});

//Store

export const store = configureStore({ reducer: { appReducer, initialState } });



//Debug

window.store = store;
window.actions = actions;

//End Redux
