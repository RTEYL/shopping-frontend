import React, {Component} from 'react'
import { connect } from 'react-redux'
import {logoutUser} from '../actions/Fetch'


class Logout extends Component{
  componentDidMount(){
    this.props.logoutUser()
  }
  render(){ return null }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
