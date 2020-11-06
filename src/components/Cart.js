import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        {this.props.items.map((item) => (
          <li key={item.id}>
              <p>{item.name} <button onClick={()=>this.props.removeFromCart(item)} >x</button></p>
              <p>{item.price}</p>
          </li>
            )
          )
        }
      </div>
    )
  }
}
