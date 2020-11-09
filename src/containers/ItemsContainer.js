import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from '../components/Items'
import { addToCart } from '../actions/CartActions'
import  {Container, Row}  from 'react-bootstrap'

class ItemsContainer extends Component {


  render() {
    return (
        <Container className='items-container'>
          <Row>
            <Items addToCart={this.props.addToCart} items={this.props.items}/>
          </Row>
        </Container>
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