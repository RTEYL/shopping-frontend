import React, { Component } from "react";
import { Alert, Form } from "react-bootstrap";

class UserCreate extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    admin: false,
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "admin") {
      value = value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let configObj = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: this.state }),
    };
    fetch("https://shopping-center-api.herokuapp.com/api/v1/users", configObj)
      .then((resp) => resp.json())
      .then((json) => {
        if (!!json.errors) {
          throw (new Error().message = json.errors);
        } else {
          this.props.history.push("/admin");
        }
      })
      .catch((err) => {
        <Alert variant="danger">{err}</Alert>;
      });
  };
  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
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
          <br />
          <br />
          Admin?
          <select name="admin" onChange={this.handleChange}>
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
          <br />
          <br />
          <button type="submit">Create User</button>
        </Form>
      </div>
    );
  }
}

export default UserCreate;
