import { Card, Col } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

const Item = (props) => {
  return (
    <Col sm={6.5} md={6} lg={4} xl={3}>
      <Card bg="light">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: props.item.name,
              isFluidWidth: true,
              src: props.item.image,
              sizes:
                "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
            },
            largeImage: {
              alt: props.item.name,
              src: props.item.image,
              width: 800,
              height: 1000,
            },
            enlargedImagePosition: "over",
            isHintEnabled: true,
            shouldHideHintAfterFirstActivation: true,
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
          ${props.item.price}{" "}
          <button onClick={() => props.addToCart(props.item)}>
            Add To Cart
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
