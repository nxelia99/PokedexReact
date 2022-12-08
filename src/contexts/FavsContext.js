import React from 'react'

const FavsContext = React.createContext({
  favPokemon: [],
  updateFavPokemons: (id) => null
});

export const FavProvider = FavsContext.Provider;

export default FavsContext;