import React from "react";
import { Container } from "react-bootstrap";
import  Pokemon  from './Pokemon';
import Pagination from "./Pagination";

const Pokedex = (props) =>{
    const {pokemons, page, setPage, total} = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
      };
    
      const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
      };

    return(
        <Container>
            <h1 className="text-center my-5">Pokedex</h1>
            <div className="d-flex justify-content-end">
                <div className="flex-column"><p className="text-center fs-5 fw-bold">Pagination</p>
                <Pagination 
                page={page + 1} 
                totalPages={total} 
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />
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