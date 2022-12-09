import React, { useContext } from "react";
import FavsContext from "../contexts/FavsContext";
import blackiconstar from '../images/blackiconstar.png'
import iconstar from '../images/iconstar.png'

const Pokemon = (props) =>{
    const {pokemon} = props;
    const black = '🖤'
    const yellow = '💛'
    const {favPokemon} = useContext(FavsContext)
    const heart = favPokemon.includes(pokemon.name) ? yellow : black;

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

  

    return(
        <div className="pokemon d-flex flex-row card text-center shadow p-3 mb-5 bg-body rounded">
            <div className="d-row pokemon-img m-auto align-center justify-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} width={95} height={95}/>
            </div>
        <div className="cardbody align-center">
                <div className="d-flex flex-row justify-content-between align-center">
                    <div><h3 className="pokename">{pokemon.name}</h3></div>
                    <div className="fs-5"> #{pokemon.id}</div>
                </div>
                <div className="d-flex flex-row pokemon-type justify-content-between align-center">
                    <div className="mt-5 d-flex flex-row text-center">{pokemon.types.map((type, idx) => {
                        return(
                            <div className="m-1 text-type border px-2" key={idx}>{type.type.name}</div>
                        )
                    }
                    
                    )}
                    </div>
                    <button className="btn py-1">
                        <div className="mt-5 iconstar">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}    
export default Pokemon;