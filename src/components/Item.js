import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.item.name}</h4>
        <p>{this.props.item.brand}</p>
        <img src={this.props.item.image} alt={this.props.item.name}/>
        <p>{this.props.item.description}</p>
        <p>${this.props.item.price}</p>
        <button onClick={()=>this.props.addToCart(this.props.item)}>Add To Cart</button>
      </div>
    )
  }
}
