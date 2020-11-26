import React, { Component } from "react";
import { connect } from "react-redux";
import ItemsList from "../components/admin/ItemsList";

class AdminContainer extends Component {
  render() {
    return <ItemsList {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
  };
};

export default connect(mapStateToProps, null)(AdminContainer);
