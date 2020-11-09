import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from 'react-bootstrap/Nav'

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Nav.Link href="/login" onClick={()=>loginWithRedirect()}>
        Login/Signup
      </Nav.Link>
    )
  )

};

export default Login;