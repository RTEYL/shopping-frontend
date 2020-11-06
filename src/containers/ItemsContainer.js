import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from '../components/Items'
import { addToCart } from '../actions/CartActions'

class ItemsContainer extends Component {


  render() {
    return (
        <div className='items-container'>
          <Items addToCart={this.props.addToCart} items={this.props.items}/>
        </div>
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