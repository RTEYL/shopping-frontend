import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cart from "../components/orders/Cart";
import { removeFromCart, setActive } from "../actions/CartActions";
import { Paypal } from "../utilities/Paypal";

class CartPage extends Component {
  componentDidMount() {
    if (this.props.items.length === 0) {
      this.props.setActive(false);
      this.props.history.push("/");
    }
  }

  render() {
    const cartTotal = this.props.items.reduce((a, b) => {
      return a + b.price * b.count;
    }, 0);
    const cartTax = cartTotal * (7.5 / 100);
    const totalCost = cartTotal + cartTax;
    return (
      <div className="cart-container">
        {this.props.cartIsActive && (
          <>
            <Cart
              removeFromCart={this.props.removeFromCart}
              items={this.props.items}
            />
            <small>Total - ${cartTotal.toFixed(2)}</small>
            <br />
            <small>Tax - ${cartTax.toFixed(2)}</small>
            <h5>Total Cost - ${totalCost.toFixed(2)}</h5>
            <Paypal
              user={this.props.user}
              totalCost={totalCost}
              items={this.props.items}
            />
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    cartIsActive: state.cart.active,
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    setActive: (bool) => dispatch(setActive(bool)),
  };
};

export const CartContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartPage)
);
