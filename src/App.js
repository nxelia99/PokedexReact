import Navbar from './components/NavBar';
import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonData, getPokemons } from './api';
import pikachu from './images/pikachu.gif';
import ash from './images/ash.gif'
import { FavProvider } from './contexts/FavsContext';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favs, setFavs] = useState([])

  const fetchPokemons = async () => {
    try{
      const data = await getPokemons(25, 25*page);
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises);
      setPokemons(results)
      setTotal(Math.ceil(data.count / 25));
    }catch(err){

    }
  }
  useEffect(()=>{
    fetchPokemons();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    },[page]);
  
const updateFavPokemons = (name) =>{
  const updated = [... favs]
  const isFav = favs.indexOf(name);
  if(isFav >= 0){
    updated .splice(isFav, 1)
  }else{
    updated.push(name)
  }
  setFavs(updated)
}
  return (
    <>
    <FavProvider value={{favPokemon: favs, updateFavPokemons: updateFavPokemons}}>
      <Navbar /> 
      { loading ?  (<> <div className='text-center mt-5'><h2>Cargando pokemons...</h2></div>
                  <div className='mt-5 d-flex flex-row justify-content-center align-items-center gap-5'><img src={ash} className='mb-4' alt='ash' /><img className='mt-5' src={pikachu} width="90px" alt='pikachu'/></div></>)
      :
      (<Pokedex pokemons={pokemons} page={page} setPage={setPage} total={total} /> )}
    </FavProvider>
    </>  
  );
}

