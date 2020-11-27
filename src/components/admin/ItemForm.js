import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateItem } from "../../actions/AdminActions";

class ItemForm extends Component {
  state = {
    item: {
      name: "",
      brand: "",
      category: "",
      description: "",
      price: 0,
      image: "",
    },
  };

  componentDidMount = () => {
    const item = this.props.items.find(
      (i) => i.id.toString() === this.props.match.params.itemId
    );
    this.setState({ item: item });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateItem({ ...this.state, history: this.props.history });
    this.setState({
      item: {
        name: "",
        brand: "",
        category: "",
        description: "",
        price: 0,
        image: "",
      },
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      item: {
        ...this.state.item,
        [name]: value,
      },
    });
  };

  render() {
    const {
      name,
      brand,
      category,
      description,
      price,
      image,
    } = this.state.item;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="itemName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            placeholder="Item Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="brandName">
          <Form.Label>Brand Name</Form.Label>
          <Form.Control
            placeholder="Brand Name"
            type="text"
            name="brand"
            value={brand}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            placeholder="Category"
            type="text"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="itemDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            placeholder="Item Description"
            type="text"
            as="textarea"
            rows={3}
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="itemPrice">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            placeholder="Item Price"
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="itemImageUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control
            placeholder="Image Url"
            type="text"
            name="image"
            value={image}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Confirm Changes
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (item) => dispatch(updateItem(item)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemForm)
);
