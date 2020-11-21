import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar'
import {fetchItems, fetchLoggedInUser} from './actions/Fetch'
import {CartContainer} from './containers/CartContainer'
import {Login} from './components/auth/Login';
import {Logout} from './components/auth/Logout';
import {SignUp} from './components/auth/SignUp'
import OrdersContainer from './containers/OrdersContainer'

class App extends Component{

  componentDidMount(){
    this.props.fetchLoggedInUser()
    this.props.fetchItems()
  }

  render(){
    return(
      <>
        <Router>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path='/' component={ItemsContainer}/>
              <Route exact path='/cart' component={CartContainer}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route path='/users/:id/orders' component={OrdersContainer} />
            </Switch>
          </Container>
      </Router>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchItems: () => dispatch(fetchItems()),
     fetchLoggedInUser: () => dispatch(fetchLoggedInUser())
    }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.logged_in
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
