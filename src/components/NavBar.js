import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg='light' expand='lg' sticky='top' >
        <Navbar.Brand as={Link} to="/">Shopping Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Logout />
            <Login />
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}