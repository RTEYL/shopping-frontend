import React, { Component } from "react";
import { connect } from "react-redux";
import Items from "../components/items/Items";
import { addToCart } from "../actions/CartActions";
import { Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { sortByPrice } from "../actions/ItemActions";

class ItemsContainer extends Component {
  handleClick = (event) => {
    this.props.sortByPrice(this.props.items, event.target.value);
  };

  render() {
    return (
      <Container className="items-container">
        <DropdownButton id="dropdown-item-button" title="Sort By: ">
          <Dropdown.Item onClick={this.handleClick} as="button" value="lowest">
            price - lowest
          </Dropdown.Item>
          <Dropdown.Item onClick={this.handleClick} as="button" value="highest">
            price - highest
          </Dropdown.Item>
        </DropdownButton>
        <Row>
          <Items addToCart={this.props.addToCart} items={this.props.items} />
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.products.items,
    cartIsActive: state.cart.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    sortByPrice: (items, method) => dispatch(sortByPrice(items, method)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
