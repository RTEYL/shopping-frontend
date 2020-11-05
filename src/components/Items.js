import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
  renderItems = () => {
    return this.props.items.map(item=>{
      return <Item addToCart={this.props.addToCart} key={item.id} item={item} />
    })
  }
  render() {
    return (
      <>
        {this.renderItems()}
      </>
    )
  }
}
