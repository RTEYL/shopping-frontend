import {Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect bg='light' expand='lg' sticky='top' >
      <Navbar.Brand as={Link} to="/">Shopping Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link eventKey='1' as={Link} to="/">Home</Nav.Link>
          <Nav.Link eventKey='2' as={Link} to="/about">About</Nav.Link>
          {props.loggedIn ?
            <Nav.Link eventKey='3' as={Link} to="/logout">Logout</Nav.Link>
              :
            <Nav.Link eventKey='4' as={Link} to="/login">Login</Nav.Link>
          }
          <Nav.Link eventKey='5' as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.user.logged_in
    }
  }


export default connect(mapStateToProps, null)(NavBar)