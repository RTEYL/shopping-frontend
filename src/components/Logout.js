import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from 'react-bootstrap/Nav'


const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Nav.Link href="/logout" onClick={()=>logout()}>
        Logout
      </Nav.Link>
    )
  )
}

export default Logout
