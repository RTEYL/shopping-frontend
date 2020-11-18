import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { loginUser } from '../../actions/Fetch';
import Alert from 'react-bootstrap/Alert'

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  handleSubmit = async (event) => {
    event.preventDefault()
    await this.props.loginUser({user: this.state, history: this.props.history })
    // this.props.history.push('/')
  };
  render() {
    const {email, password} = this.state
    return (
      <div>
        <h1>Log In</h1>
          {this.props.errors && (
            <Alert variant="danger">
              {this.props.errors}
            </Alert>
          )}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            />
          <button type="submit">Log In</button>
          <div>
            or <Link to='/signup'>Sign Up</Link>
          </div>

         </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    removeErrors: () => dispatch({type: 'REMOVE_ERRORS'})
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.users.errors
  }
}

export const Login =  withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));