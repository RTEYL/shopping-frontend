import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import Cart from '../components/Cart'

class ItemsContainer extends Component {

  renderItems = () => {
    return this.props.items.map(item=>{
      return <Item key={item.id} item={item} />
    })
  }
  render() {
    return (
      <>
        <div>
          {this.renderItems()}
        </div>
        {this.props.cartIsActive && (
          <div>
            <Cart />
          </div>
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    items: state.products.items,
    cartIsActive: state.cart.active
  }
}


export default connect(mapStateToProps)(ItemsContainer)