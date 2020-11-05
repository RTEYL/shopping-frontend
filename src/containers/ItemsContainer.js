import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from '../components/Items'
import Cart from '../components/Cart'
import { addToCart } from '../actions/CartActions'

class ItemsContainer extends Component {


  render() {
    return (
      <>
        <div>
          <Items addToCart={this.props.addToCart} items={this.props.items}/>
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

const mapDispatchToProps =( dispatch) => {
  return {
    addToCart: item => dispatch(addToCart(item))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)