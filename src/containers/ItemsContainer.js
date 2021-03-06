import React, { Component, lazy } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/CartActions";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { fetchItems } from "../actions/ItemActions";
import { sortByPrice } from "../actions/ItemActions";
import SearchBar from "../utilities/SearchBar";
import { Suspense } from "react";
const Items = lazy(() => import("../components/items/Items"));

class ItemsContainer extends Component {
  state = {
    searchTerm: "",
  };

  componentDidMount() {
    this.props.fetchItems();
  }

  handleClick = (event) => {
    this.props.sortByPrice(this.props.items, event.target.value);
  };

  handleSearch = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value,
    });
  };

  filterItems = () => {
    const { searchTerm } = this.state;
    const filteredItems = this.props.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredItems;
  };

  render() {
    return (
      <Container fluid className="items-container">
        <Row noGutters>
          <Col></Col>
          <SearchBar
            placeholder="Search Items..."
            onChange={this.handleSearch}
          />
          <DropdownButton id="dropdown-item-button" title="Sort By: ">
            <Dropdown.Item
              onClick={this.handleClick}
              as="button"
              value="default">
              Clear Filter
            </Dropdown.Item>
            <Dropdown.Item
              onClick={this.handleClick}
              as="button"
              value="lowest">
              price - lowest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={this.handleClick}
              as="button"
              value="highest">
              price - highest
            </Dropdown.Item>
          </DropdownButton>
        </Row>
        <Row>
          <Suspense fallback={<div>Loading...</div>}>
            <Items
              addToCart={this.props.addToCart}
              items={this.filterItems()}
            />
          </Suspense>
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
    fetchItems: () => dispatch(fetchItems()),
    addToCart: (item) => dispatch(addToCart(item)),
    sortByPrice: (items, method) => dispatch(sortByPrice(items, method)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
