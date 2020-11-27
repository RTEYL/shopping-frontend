import React from "react";
import { Button } from "react-bootstrap";
import ItemsList from "../components/admin/ItemsList";

const AdminContainer = (props) => {
  return (
    <>
      <Button
        onClick={() => {
          props.history.push(`/admin/items/create`);
        }}
        size="sm"
        variant="info">
        Create New Item
      </Button>
      <ItemsList {...props} />
    </>
  );
};

export default AdminContainer;
