import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/AdminActions";

const ItemsList = (props) => {
  const renderItems = () => {
    return props.items.map((i) => {
      return (
        <tbody key={i.id}>
          <tr>
            <td>
              {i.id}
              <br />
              <Button
                onClick={() => {
                  props.history.push(`/admin/items/${i.id}/edit`);
                }}
                size="sm"
                variant="warning">
                Edit
              </Button>
              <Button
                onClick={() => props.deleteItem(i)}
                size="sm"
                variant="danger">
                Delete
              </Button>
            </td>
            <td>{i.name}</td>
            <td>{i.brand}</td>
            <td>{i.category}</td>
            <td>{i.description}</td>
            <td>{i.price}</td>
            <td>{i.image}</td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <Table responsive striped bordered>
      <thead>
        <tr>
          <th>id</th>
          <th>Item Name</th>
          <th>Brand Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image Url</th>
        </tr>
      </thead>
      {renderItems()}
    </Table>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ItemsList);
