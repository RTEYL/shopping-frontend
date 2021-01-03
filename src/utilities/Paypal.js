import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkout } from "../actions/OrderActions";

class PaypalBtn extends Component {
  render() {
    const ppalKey = process.env.REACT_APP_PAYPAL_SANDBOX_KEY;

    const flattenObject = (obj) => {
      const flattened = {};

      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          Object.assign(flattened, flattenObject(obj[key]));
        } else {
          flattened[key] = obj[key];
        }
      });

      return flattened;
    };

    const onSuccess = (data) => {
      this.props.checkout({
        order_data: flattenObject(data),
        user: this.props.user,
        history: this.props.history,
      });
      alert("The payment was succeeded!");
    };

    const onCancel = (data) => {
      alert("The payment was cancelled!");
    };

    const onError = (err) => {
      alert("Error!", err);
    };

    let env = "sandbox";
    let currency = "USD";
    let total = parseFloat(this.props.totalCost);
    const client = {
      sandbox: ppalKey,
    };

    const style = {
      color: "silver",
      shape: "rect",
      size: "medium",
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={style}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (data) => dispatch(checkout(data)),
  };
};

const mapStateToProps = (state) => {
  if (state.users.logged_in) {
    return {
      user: state.users.user,
    };
  } else {
    return { user: null };
  }
};

export const Paypal = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PaypalBtn)
);
