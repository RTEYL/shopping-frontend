import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

export default class Item extends Component {
  render() {
    return (
      <Col sm={5} md={3} lg={true} >
        <Card bg='light'>
          <Card.Img src={this.props.item.image} alt={this.props.item.name} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              <small>{this.props.item.brand}</small>
                <br/><br/>
              {this.props.item.description}
            </Card.Text>
              ${ this.props.item.price }{' '}
            <button onClick={()=>this.props.addToCart(this.props.item)}>Add To Cart</button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
