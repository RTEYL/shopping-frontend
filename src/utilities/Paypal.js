import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkout } from '../actions/Fetch'

class PaypalBtn extends Component {

  render() {

    const flattenObject = (obj) => {
      const flattened = {}

      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(flattened, flattenObject(obj[key]))
        } else {
          flattened[key] = obj[key]
        }
      })

      return flattened
    }

    const onSuccess = (data) => {


      this.props.checkout({order_data: flattenObject(data), user: this.props.user})
      console.log("The payment was succeeded!", data);
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
      console.log("Error!", err);
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = parseFloat(this.props.totalCost); // same as above,

    const client = {
      sandbox: 'AS-aaifKXn75sDULqrUD-RoxnbqUKbx1e_9MpexsFZ2alQmPNCdJy5KfuuGkR2H8oUNpdS2_7wb1fuZE',
      production: 'YOUR-PRODUCTION-APP-ID',
    }

    const style = {
      color: 'silver',
      shape: 'rect',
      size: 'medium'
    }

    return (
        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: data => dispatch(checkout(data))
  }
}

const mapStateToProps = (state) => {
  if (state.users.loggedIn) {
    return{
      user: state.users.user
    }
  }else{
    return{user: null}
  }
}

export const Paypal = withRouter(connect(mapStateToProps, mapDispatchToProps)(PaypalBtn))