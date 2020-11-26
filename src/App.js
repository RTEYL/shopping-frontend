import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ItemsContainer from "./containers/ItemsContainer";
import { CartContainer } from "./containers/CartContainer";
import OrdersContainer from "./containers/OrdersContainer";
import AdminContainer from "./containers/AdminContainer";
import NavBar from "./components/NavBar";
import ItemForm from "./components/admin/ItemForm";
import { Login } from "./components/auth/Login";
import { Logout } from "./components/auth/Logout";
import { SignUp } from "./components/auth/SignUp";
import { fetchItems, fetchLoggedInUser } from "./actions/Fetch";

class App extends Component {
  componentDidMount() {
    this.props.fetchLoggedInUser();
    this.props.fetchItems();
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Container>
            <Switch>
              {this.props.user.admin && (
                <>
                  <Route
                    exact
                    path="/admin"
                    render={(props) => <AdminContainer {...props} />}
                  />
                  <Route
                    path="/admin/items/:itemId"
                    render={(props) => <ItemForm {...props} />}
                  />
                </>
              )}
              <Route exact path="/" component={ItemsContainer} />
              <Route exact path="/cart" component={CartContainer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/users/:id/orders" component={OrdersContainer} />
              <Route component={ItemsContainer} />
            </Switch>
          </Container>
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
  };
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.logged_in,
    user: state.users.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
