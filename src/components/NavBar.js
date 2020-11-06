import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './Cart'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>
        <h2>Shopping Center</h2>
        <button onClick={()=><Cart/>}>Cart</button>
      </div>
    )
  }
}
