import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar'
import {fetchItems} from './actions/Fetch'
import {connect} from 'react-redux'
import CartContainer from './containers/CartContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component{
  render(){
    return(
      <>
        {this.props.fetchItems()}
        <Router>
          <NavBar />
          <Container>
            <Switch>
              <Route exact path='/' component={ItemsContainer}/>
              <Route exact path='/cart' component={CartContainer}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
            </Switch>
          </Container>
        </Router>
      </>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { fetchItems: () => dispatch(fetchItems()) }
}

export default connect(null,mapDispatchToProps)(App);
