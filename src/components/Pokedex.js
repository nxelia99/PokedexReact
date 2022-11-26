import React from "react";
import { Container } from "react-bootstrap";
import  Pokemon  from './Pokemon';
import Pagination from "./Pagination";

const Pokedex = (props) =>{
    const {pokemons} = props;

    return(
        <Container>
            <h1 className="text-center my-5">Pokedex</h1>
            <div className="d-flex justify-content-end">
                <div className="flex-column"><p className="text-center fs-5 fw-bold">Pagination</p>
                <Pagination />
                </div>
            </div>
            <div className="pokedex-grid">
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