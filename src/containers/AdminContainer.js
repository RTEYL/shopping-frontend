import React, { Component } from "react";
import ItemsList from "../components/admin/ItemsList";

class AdminContainer extends Component {
  render() {
    return <ItemsList {...this.props} />;
  }
}

export default AdminContainer;
