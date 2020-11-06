import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar'
import {fetchItems} from './actions/Fetch'
import {connect} from 'react-redux'
import CartContainer from './containers/CartContainer'

class App extends Component{
  render(){
    return(
      <>
        {this.props.fetchItems()}
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={ItemsContainer}/>
            {/* <Route exact path='/about' component={About}/> */}
            {/* <Route component={NoMatch}/> */}
          </Switch>
          <CartContainer />
        </Router>
      </>
      )
  }
}
function mapDispatchToProps(dispatch){
  return { fetchItems: () => dispatch(fetchItems()) }
}

export default connect(null,mapDispatchToProps)(App);
