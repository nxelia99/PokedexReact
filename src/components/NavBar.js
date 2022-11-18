import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import iconstar from '../images/iconstar.png';
import darkmode from '../images/dark-mode.png';

const navbar = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <img className='logo m-auto' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' alt='pokeapi logo'/>
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="#features" className='mx-2'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='mx-2'>Favs <img src={iconstar} className='iconstar' alt='iconstar'/></Nav.Link>
          </Nav>
          <div className='align-items-end'>
                <img src={darkmode} alt='darkmode' />
            </div>
        </Container>
        </Navbar>
    )
}

export default navbar;