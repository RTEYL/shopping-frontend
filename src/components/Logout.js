import {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import {logoutUser} from '../actions/Fetch'


class LogoutForm extends Component{
  componentDidMount = async () => {
    await this.props.logoutUser()
    this.props.history.push('/')
  }
  render(){ return null }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export const Logout =  withRouter(connect(null, mapDispatchToProps)(LogoutForm));
