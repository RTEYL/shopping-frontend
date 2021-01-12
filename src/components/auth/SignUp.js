import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Alert from "react-bootstrap/Alert";
import { userSignUp } from "../../actions/Fetch";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userSignUp({ user: this.state, history: this.props.history });
  };
  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        {this.props.errors && (
          <Alert variant="danger">{this.props.errors}</Alert>
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
          <input
            placeholder="Confirm Password"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userSignUp: (user) => dispatch(userSignUp(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    errors: state.users.errors,
  };
};
export const SignUp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);

export { SignUp as default } from "./SignUp";
