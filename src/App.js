import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar'
import {fetchItems, fetchLoggedInUser} from './actions/Fetch'
import CartContainer from './containers/CartContainer'
import Login from './components/Login';
import Logout from './components/Logout';
import CartForm from './components/CartForm';
import SignUp from './components/SignUp'

class App extends Component{

  componentDidMount(){
    this.props.fetchLoggedInUser()
    this.props.fetchItems()
  }

  render(){
    return(
      <>
        <Router>
          <NavBar loggedIn={this.props.logged_in} />
          <Container>
            <Switch>
              <Route exact path='/' component={ItemsContainer}/>
              <Route exact path='/cart' component={CartContainer}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/checkout' component={CartForm}/>
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
    loggedIn: state.user.logged_in
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
