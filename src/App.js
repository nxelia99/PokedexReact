import Navbar from './components/NavBar';
import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonData, getPokemons } from './api';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try{
      const data = await getPokemons();
      console.log(data.results)
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results)
    }catch(err){

    }
  }
  useEffect(()=>{
    fetchPokemons();
    },[]);

  return (
    <>
      <Navbar /> 
      <Pokedex pokemons={pokemons} />
    </>  
  );
}

