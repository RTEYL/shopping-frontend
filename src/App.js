import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { fetchLoggedInUser } from "./actions/Fetch";
import NavBar from "./components/NavBar";
const ItemsContainer = lazy(() => import("./containers/ItemsContainer"));
const CartContainer = lazy(() => import("./containers/CartContainer"));
const OrdersContainer = lazy(() => import("./containers/OrdersContainer"));
const Login = lazy(() => import("./components/auth/Login"));
const Logout = lazy(() => import("./components/auth/Logout"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const AdminRoutes = lazy(() => import("./components/admin/AdminRoutes"));
const About = lazy(() => import("./components/About"));

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    token && this.props.fetchLoggedInUser();
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ItemsContainer} />
                <Route exact path="/cart" component={CartContainer} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/about" component={About} />
                <Route path="/users/:id/orders" component={OrdersContainer} />
                <Route
                  path="/admin"
                  render={(props) => (
                    <AdminRoutes {...props} admin={this.props.user.admin} />
                  )}
                />
                <Route component={ItemsContainer} />
              </Switch>
            </Suspense>
          </Container>
        </Router>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
