import React from "react";
import { Card, Col } from "react-bootstrap";

const Order = (props) => {
  return (
    <Col sm={6.5} md={6} lg={4} xl={3}>
      <Card bg="light">
        <Card.Body>
          <Card.Title>Order number: {props.order.id}</Card.Title>
          <Card.Text>
            <p>
              Purchase date: {props.order.purchase_date}
              <br />
              Shipped to: {props.order.recipient_name}
              <br />
              Address: {props.order.line1}, {props.order.city}{" "}
              {props.order.state}, {props.order.postal_code}
              <br />
              Email: <em>{props.order.email}</em>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Order;
