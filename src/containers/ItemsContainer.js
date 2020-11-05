import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemsContainer extends Component {
  render() {
    return (
      <div>
        ITEMS CONT
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    items: state.items
  }
}


export default connect(mapStateToProps)(ItemsContainer)