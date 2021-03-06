import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <FormControl
          type="search"
          aria-label="Search"
          className="search-bar"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
