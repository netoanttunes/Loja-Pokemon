import React, { useEffect, useState } from 'react';
import SearchResults from 'react-filter-search';
import { useDispatch } from 'react-redux';

import './styles.css';
import Carts from '../sidebar';
import logo from '../../asets/Logo.png'

function PokemonList(){
    const [pokemons, setPokemons] = useState([]);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();    
    
    useEffect(() => {
        async function fetchData() {
          let poke = [];
          for(let i = 1 ; i<=150; i++){
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
          const data = await response.json()
          data.price = Math.floor(Math.random() *500) +1
          poke [i] = data
          }
          setPokemons(poke)
          console.log(poke)
         }
        fetchData();
      }, []);

      function addNameAction(name, price) {
        return { type: 'ADD', name, price }
      }

  

      function addPokemon(name, price) {
        dispatch(addNameAction(name, price))
        console.log(name, price)
      }

     
    return ( 
        <div className="container">
          <header>
          <img src={logo} alt="Pokemon" />
        <input type="text" placeholder="Busque seu Pokemon" onChange={ e => setValue(e.target.value)} />
           </header>
        <div className="lista-container">
        <SearchResults
          value={value}
          data={pokemons}
          renderResults={results => (
          <ul>
          {results.map( pokemons => {
              return(
                      <li key={pokemons.id}>
                      <h1>{pokemons.name}</h1>
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`} alt={pokemons.name} />       
                      <h2><strong>R$ {pokemons.price},00</strong></h2>
                      <button className="button" onClick={() => addPokemon(pokemons.name, pokemons.price)}>
                      Comprar
                      </button>
                      </li>
                        )}
                      )}         
          </ul>  
          )} />
         <Carts />

        </div>
       </div>

    )
}

export default PokemonList