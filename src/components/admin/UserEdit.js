import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { token } from "../../actions/Fetch";

class UserEdit extends Component {
  state = {
    user: {
      id: null,
      email: "",
      admin: false,
    },
  };

  componentDidMount() {
    fetch(
      `https://shopping-center-api.herokuapp.com/api/v1/users/${this.props.match.params.userId}`,
      {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((json) => this.setState({ ...this.state, user: json }))
      .catch((err) => console.log("fetch error", err));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://shopping-center-api.herokuapp.com/api/v1/users/${this.state.user.id}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(this.state),
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        this.props.history.push("/admin");
      })
      .catch((err) => console.log("fetch error", err));
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "admin") {
      value = value === "true" ? true : false;
    }
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  render() {
    const { email } = this.state.user;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="userEmail">
          <Form.Label>User Email</Form.Label>
          <Form.Control
            placeholder="User Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="userAdmin">
          <Form.Label>Admin?</Form.Label>
          <br />
          <select name="admin" onChange={this.handleChange}>
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </Form.Group>
        <Button variant="success" type="submit">
          Confirm Changes
        </Button>
      </Form>
    );
  }
}
export default UserEdit;
