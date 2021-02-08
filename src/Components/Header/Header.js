import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="#/favorites">Favourites</Nav.Link>
  </Fragment>
)

const Header = () => (
  <Navbar bg="info" variant="dark" expand="md" className="pt-0">
    <Navbar.Brand href="#">
      <h1 className="nav-name">Beans Love Beers</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
