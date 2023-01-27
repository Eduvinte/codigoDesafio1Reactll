import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'
import iconHome from '../../images/icons/iconHome.png'
import iconContact from '../../images/icons/iconContact.png'

function Menu() {
  return (
    <div>
      <Navbar className='navbar_container' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img alt='pasteles' src={logo} width={100} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link id='link_nav' href="/"><img id='icon' src={iconHome} width={25} alt='pasteles'/> Home</Nav.Link>
            <Nav.Link id='link_nav' href="contacto"><img id='icon' src={iconContact} alt='pasteles' width={25}/> Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu