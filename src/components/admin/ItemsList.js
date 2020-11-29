import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/AdminActions";
import SearchBar from "../../utilities/SearchBar";

class ItemsList extends Component {
  state = {
    items: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      items: this.props.items,
    });
  }

  renderItems = () => {
    const { items, searchTerm } = this.state;
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredItems.map((i) => {
      return (
        <tbody key={i.id}>
          <tr>
            <td>
              {i.id}
              <br />
              <Button
                onClick={() => {
                  this.props.history.push(`/admin/items/${i.id}/edit`);
                }}
                size="sm"
                variant="warning">
                Edit
              </Button>
              <Button
                onClick={() => this.props.deleteItem(i)}
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

  handleSearch = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <>
        <SearchBar
          placeholder="Filter by item name"
          onChange={this.handleSearch}
        />
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
          {this.renderItems()}
        </Table>
      </>
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
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
