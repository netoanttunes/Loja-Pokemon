import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    
   ]
};

function pokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, data: [...state.data, {name: action.name , price: action.price}] };
    default:
      return state;
  }
}


const store = createStore(pokemons);

export default store;
