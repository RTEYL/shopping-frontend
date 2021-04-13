import React from 'react';
import { Card, Col, Overlay, Button } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';

const Item = (props) => {
  const [active, setActive] = React.useState(false);
  const target = React.useRef(null);
  const activeRef = React.useRef(active);

  const itemAddedToCart = () => {
    setTimeout(() => {
      setActive(!activeRef);
    }, 1500);
  };
  const handleClick = () => {
    setActive(!active);
    itemAddedToCart();
    props.addToCart(props.item);
  };
  return (
    <Col sm={6.5} md={6} lg={4} xl={3}>
      <Card bg='light'>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: props.item.name,
              isFluidWidth: true,
              src: props.item.image,
              sizes:
                '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
            },
            largeImage: {
              alt: props.item.name,
              src: props.item.image,
              width: 800,
              height: 1000,
            },
            enlargedImagePosition: 'over',
          }}
        />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>
            <small>{props.item.brand}</small>
            <br />
            <br />
            {props.item.description}
          </Card.Text>
          ${props.item.price}{' '}
          <Button
            variant='outline-dark'
            ref={target}
            onClick={() => handleClick()}>
            Add To Cart
          </Button>
          <Overlay target={target.current} show={active} placement='right'>
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  backgroundColor: '#343a40',

                  marginLeft: '.5%',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}>
                Added to Cart!
              </div>
            )}
          </Overlay>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
