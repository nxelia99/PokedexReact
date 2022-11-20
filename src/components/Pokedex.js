import React from "react";
import { Container } from "react-bootstrap";
import  Pokemon  from './Pokemon';

const Pokedex = (props) =>{
    const {pokemons} = props;
    return(
        <Container>
            <h1 className="text-center my-5">Pokedex</h1>
            <div className="d-flex justify-content-end">Pagination</div>
            <div className="pokedex d-grid">
                {pokemons.map((pokemon, idx) => {
                        return(
                            <Pokemon pokemon={pokemon} key={pokemon.name}/>
                        )
                    })}
            </div>
        </Container>
    )
}

export default Pokedex;