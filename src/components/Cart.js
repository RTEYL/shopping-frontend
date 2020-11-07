import React, { Component } from 'react'
import cuid from 'cuid'

export default class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        {this.props.items.map((item) => (
          <li key={cuid()}>
              <p>{ item.count + 'X' } </p>
              <p>{item.name} <button onClick={()=>this.props.removeFromCart(item)} >x</button></p>
              <p>${item.price * item.count}</p>
          </li>
            )
          )
        }
      </div>
    )
  }
}
