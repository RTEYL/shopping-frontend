import {Navbar, Nav, Badge} from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const renderLinks = (loggedIn) => {
    if(loggedIn){
      return (
        <>
          <Nav.Link eventKey='3' as={Link} to="/logout">Logout</Nav.Link>
          <Nav.Link eventKey='6' as={Link} to={`/users/${props.user.id}/orders`}>My Orders</Nav.Link>
        </>
      )
    }else{
      return (
        <Nav.Link eventKey='4' as={Link} to="/login">Login/Sign Up</Nav.Link>
      )
    }
  }
  return (
    <Navbar collapseOnSelect bg='light' expand='lg' sticky='top' >
      <Navbar.Brand as={Link} to="/">Shopping Center</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav defaultActiveKey='/' className="mr-auto">
          <Nav.Link eventKey='1' as={Link} to="/">Home</Nav.Link>
          <Nav.Link eventKey='2' as={Link} to="/about">About</Nav.Link>
          {renderLinks(props.loggedIn)}
          <Nav.Link eventKey='5' as={Link} to="/cart">
            Cart <Badge variant="dark">{props.cartItemCount}</Badge>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.users.logged_in,
      user: state.users.user,
      cartItemCount: state.cart.itemCount
    }
  }


export default connect(mapStateToProps, null)(NavBar)