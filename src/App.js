import React from 'react';
import { Provider } from 'react-redux';

import PokemonList from './components/PokemonList';


import store from './store';
import './global.css'


function App() {
  return (

    <Provider store={store}>
      <div className="global">
      
      <PokemonList />
            
      </div>
    </Provider>
  );
}

export default App;
