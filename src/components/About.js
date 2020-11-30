import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <p>
        Shopping center was created for my final project with{" "}
        <a href="https://flatironschool.com/">Flatiron</a> consisting of a
        React/Redux front-end and a Rails API backend.
      </p>
      <p>
        You can view the front-end repo{" "}
        <a href="https://github.com/RTEYL/shopping-frontend">here</a> and the
        back-end repo{" "}
        <a href="https://github.com/RTEYL/shopping-backend">here</a> on Github.
      </p>
      <p>
        My goal with this app was to practice building an ecommerce site and
        work with payments and order processing.
      </p>
    </Container>
  );
};

export default About;
