import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions/OrderActions";
import Orders from "../components/orders/Orders";

class OrdersContainer extends Component {
  render() {
    return (
      <div className="orders-container">
        <Orders orders={this.props.orders} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    orders: state.orders.completedOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (user) => dispatch(fetchOrders(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
