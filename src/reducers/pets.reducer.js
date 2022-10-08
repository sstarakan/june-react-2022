import {useReducer} from "react";

import {addCat, addDog, deleteCat, deleteDog} from "./count.actions";


const reducer = (state, action) => {
  switch (action.type) {
      case addDog:
          console.log(state);
          return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]};
      case addCat:
          console.log(state);
          return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]};
      case deleteCat:
          return {...state, cats: state.cats.filter(cat => action.payload !== cat.id)};
      case deleteDog:
          return {...state, dogs: state.dogs.filter(dog => action.payload !== dog.id)};
      default:
              return '';
  }
}

const usePetsReducer = () => useReducer(reducer, {cats: [] , dogs:[]} );

export {
    usePetsReducer
}