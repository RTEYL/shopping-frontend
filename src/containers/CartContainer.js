import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { removeFromCart, setActive } from '../actions/CartActions'
import { Link, withRouter } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import Paypal from '../utilities/Paypal'

class CartPage extends Component {

  componentDidMount(){
    if (this.props.items.length === 0){
      this.props.history.goBack()
      return this.props.setActive(false)
     }
  }

  cartTotal = (items) => {
    let sum = items.reduce((a,b) => {
      return a + (b.price * b.count)
    }, 0)
    return sum
  }

  render() {
    const totalCost = this.cartTotal(this.props.items)
    return (
      <div className='cart-container'>
        {this.props.cartIsActive && (
          <>
            <Cart removeFromCart={this.props.removeFromCart} items={this.props.items}/>
              <h5>Total - ${totalCost}</h5>
            <Paypal totalCost={totalCost} />

            {/* <Link to='/checkout'>
            <Button variant='success'>Check Out ${ this.cartTotal(this.props.items) }</Button>
            </Link> */}
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