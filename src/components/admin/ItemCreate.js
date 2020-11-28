import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createItem } from "../../actions/AdminActions";

class ItemCreate extends Component {
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
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createItem({ ...this.state, history: this.props.history });
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
    console.log(this.state);
    const { name, brand, category, description, price, image } = this.state;
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
          Add New Item To Store
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
    createItem: (item) => dispatch(createItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreate);
