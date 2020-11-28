import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";

class UsersList extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/users", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => this.setState({ ...this.state, users: json }))
      .catch((err) => console.log("fetch error", err));
  };

  deleteUser = (user) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (!json.errors) {
          this.setState({
            ...this.state,
            users: this.state.users.filter((u) => u.id !== user.id),
          });
        } else {
          alert(json.errors);
        }
      })
      .catch((err) => console.log("fetch error", err));
  };

  renderUsers = () => {
    return this.state.users.map((u) => {
      return (
        <tbody key={u.id}>
          <tr>
            <td>
              {u.id}
              <br />
              <Button
                onClick={() => {
                  this.props.history.push(`/admin/users/${u.id}/edit`);
                }}
                size="sm"
                variant="warning">
                Edit
              </Button>
              <Button
                onClick={() => this.deleteUser(u)}
                size="sm"
                variant="danger">
                Delete
              </Button>
            </td>
            <td>{u.email}</td>
            <td>{u.admin ? "True" : "False"}</td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    return (
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>Admin?</th>
          </tr>
        </thead>
        {this.renderUsers()}
      </Table>
    );
  }
}

export default UsersList;
