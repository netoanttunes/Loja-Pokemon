import React from 'react';
import { useSelector } from 'react-redux';

import './styles.css'


export default function Cart() {

   const pokemons = useSelector(state => state.data);
   const total = pokemons.reduce((subtotal, item) => subtotal + item.price, 0)
 
 
  return (
    <aside className="sidebar">
      <h1>Carrinho de Compras</h1>
      <ul>
        { pokemons.map(pokemon => <li key={pokemon}><h2>{pokemon.name} R$ {pokemon.price},00</h2></li>)}
      </ul>
      <div className="total">
        <h1>{`Total: R$ ${total},00`} </h1>
        <button className="button" >Finalizar Compra</button>
     
      </div>
      
    </aside>
  );
}
