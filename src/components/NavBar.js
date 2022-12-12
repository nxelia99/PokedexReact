import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconstar from '../images/iconstar.png';
import darkmode from '../images/dark-mode.png';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { searchPokemon } from '../api';
import FavsContext from '../contexts/FavsContext';

const {useContext} = React;
  
const navbar = () =>{
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const onChange = (evt) =>{
      setSearch(evt.target.value);
    }  
    const onClick = async(e) =>{
      const data = await searchPokemon(search);
      setPokemon(data);
    }
    const [scrolled, setScrolled] = useState(false);
    const {favPokemon} = useContext(FavsContext)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    return(
      <div className='m-auto'>
        <Navbar bg="dark" variant="dark" expand="md" className={scrolled ? "scrolled" : ""}>
          <Navbar.Brand href="/">
              <img className='logo' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' alt='pokeapi logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-column float-end">
              <Nav.Link href="#favs" className='m-2'><img src={iconstar} className='navbar-iconstar mx-3' alt='iconstar'/>{favPokemon.length}</Nav.Link>
            </Nav>
            <Form className="d-flex searchbar mx-4">
                    <input
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      id="search"
                      onChange={onChange}
                    />
                    <Button className='btn btn-secondary' onClick={onClick}>Search</Button>
                    <div className='align-items-end mx-5'>
                  <img src={darkmode} alt='darkmode' />
              </div>
            </Form>
          </Navbar.Collapse> 
        </Navbar>
        <div className='d-flex m-auto justify-content-center align-items-center mt-5 fs-5'>
          { pokemon &&
            <div  className='card p-4 d-flex flex-column text-center m-auto align-items-center'>
              <div className='pokename'><b>Nombre:</b> {pokemon.name}</div>
              <div><b>Peso:</b> {pokemon.weight}</div>
              <div className='d-flex flex-row align-items-center'> <b>Type:</b> {pokemon.types.map((type, idx) => {
                        return(
                            <div className="mx-2 text-type" key={idx}>{type.type.name}</div>
                        )
                    }
                    
                    )}
                    </div>
              <img className='pokemonimg' src={pokemon.sprites.front_default} alt='pokemon' width={180} height={180} />
            </div>} 
        </div>
      </div>
    )
}

export default navbar;