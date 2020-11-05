import React, {Component} from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar'
import {fetchItems} from './actions/Fetch'
import {connect} from 'react-redux'

class App extends Component{
  render(){
    return(
      <>
        {this.props.fetchItems()}
        <NavBar />
        <ItemsContainer />
      </>
      )
  }
}
function mapDispatchToProps(dispatch){
  return { fetchItems: () => dispatch(fetchItems()) }
}

export default connect(null,mapDispatchToProps)(App);
