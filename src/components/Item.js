import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import ReactImageMagnify from 'react-image-magnify';

export default class Item extends Component {
  render() {
    return (
      <Col sm={6.5} md={6} lg={4} xl={3} >
        <Card bg='light'>
          <ReactImageMagnify {...{
                        smallImage: {
                            alt: this.props.item.name,
                            isFluidWidth: true,
                            src: this.props.item.image,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: this.props.item.image,
                            width: 800,
                            height: 1000,
                        },
                        enlargedImagePosition: 'over',
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false

                    }} />
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
