import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { removeFromCart } from '../actions/CartActions'

class CartContainer extends Component {
  render() {
    return (
      <div className='cart-container'>
        {this.props.cartIsActive && (
          <>
            <Cart removeFromCart={this.props.removeFromCart} items={this.props.items}/>
          </>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    items: state.cart.items,
    cartIsActive: state.cart.active
  }
}

const mapDispatchToProps =( dispatch) => {
  return {
    removeFromCart: item => dispatch(removeFromCart(item))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)