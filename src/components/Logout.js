import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';


const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Nav.Link eventKey='3' as={Link} to="/logout" onClick={()=>logout()}>
        Logout
      </Nav.Link>
    )
  )
}

export default Logout
