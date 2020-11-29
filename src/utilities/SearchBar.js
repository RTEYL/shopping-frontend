import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()} inline>
      <InputGroup>
        <FormControl
          type="search"
          className="search-bar"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
