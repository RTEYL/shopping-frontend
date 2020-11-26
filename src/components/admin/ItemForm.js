import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../actions/AdminActions";

const ItemForm = (props) => {
  const item = props.fetchItem(props.match.params.ItemId);
  const handleSubmit = (event) => {};
  const handleChange = (event) => {};
  console.log(item);
  debugger;
  return (
    <form onSubmit={handleSubmit}>
      {/* <th>Item Name</th>
      <th>Brand Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Image Url</th> */}
      <input
        placeholder="Email"
        type="email"
        name="email"
        value={"i"}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={"i"}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
