import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './Cart'
import Login from './Login';
import Logout from './Logout';

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>
        <Login />
        <Logout />
        <h2>Shopping Center</h2>
        <NavLink to='/cart'>Cart</NavLink>
      </div>
    )
  }
}
