import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import AdminContainer from "../../containers/AdminContainer";
import ItemCreate from "./ItemCreate";
import ItemEdit from "./ItemEdit";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";

class AdminRoutes extends Component {
  componentDidMount() {
    !this.props.admin && this.props.history.push("/");
  }

  render() {
    return (
      <>
        <Route
          exact
          path="/admin"
          render={(props) => (
            <AdminContainer items={this.props.items} {...props} />
          )}
        />
        <Route
          exact
          path="/admin/items/create"
          render={(props) => <ItemCreate {...props} />}
        />
        <Route
          path="/admin/items/:itemId/edit"
          render={(props) => <ItemEdit {...props} />}
        />
        <Route
          exact
          path="/admin/users/create"
          render={(props) => <UserCreate {...props} />}
        />
        <Route
          path="/admin/users/:userId/edit"
          render={(props) => <UserEdit {...props} />}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
  };
};

export default connect(mapStateToProps, null)(AdminRoutes);
