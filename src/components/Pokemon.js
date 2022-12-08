import React, { useContext } from "react";
import FavsContext from "../contexts/FavsContext";
import blackiconstar from '../images/blackiconstar.png'
import iconstar from '../images/iconstar.png'

const Pokemon = (props) =>{
    const {pokemon} = props;
    const yellow = {iconstar}
    const black = {blackiconstar}
    const {favPokemon} = useContext(FavsContext)
    const heart = favPokemon.includes(pokemon.name) ? yellow : black;


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
                        <div className="mt-5 iconstar"><img src={blackiconstar} width="30px" alt="icon star"/></div>
                    </button>
                </div>
            </div>
        </div>
    )
}    
export default Pokemon;