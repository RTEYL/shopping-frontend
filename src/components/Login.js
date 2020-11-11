import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Nav.Link eventKey='4' as={Link} to="/login" onClick={()=>loginWithRedirect()}>
        Login/Signup
      </Nav.Link>
    )
  )

};

export default Login;