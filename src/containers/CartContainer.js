import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { removeFromCart, setActive } from '../actions/CartActions'
import { Link, withRouter } from 'react-router-dom'

class CartPage extends Component {

  componentDidMount(){
    if (this.props.items.length === 0){
      this.props.history.goBack()
      return this.props.setActive(false)
     }
  }

  render() {
    return (
      <div className='cart-container'>
        {this.props.cartIsActive && (
          <>
            <Cart removeFromCart={this.props.removeFromCart} items={this.props.items}/>
            <Link to='/checkout'>
              <button>Check Out</button>
            </Link>
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
    removeFromCart: item => dispatch(removeFromCart(item)),
    setActive: bool => dispatch(setActive(bool))
  }
}


export const CartContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage))