import Navbar from './components/NavBar';
import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonData, getPokemons } from './api';
import pokeball from '../src/images/pokeball.gif';
import pikachu from './images/pikachu.gif';
import ash from './images/ash.gif'

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    },[]);
  
  return (
    <>
      <Navbar /> 
      { loading ?  (<> <div className='text-center mt-5'><h2>Cargando pokemons...</h2></div>
                  <div className='mt-5 d-flex flex-row justify-content-center align-items-center gap-5'><img src={ash} className='mb-4' /><img className='mt-5' src={pikachu} width="90px"/></div></>)
      :
      (<Pokedex pokemons={pokemons} /> )}
    </>  
  );
}

