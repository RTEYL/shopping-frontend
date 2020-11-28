import React from "react";
import { Button } from "react-bootstrap";
import ItemsList from "../components/admin/ItemsList";
import UsersList from "../components/admin/UsersList";

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
      <Button
        onClick={() => {
          props.history.push(`/admin/users/create`);
        }}
        size="sm"
        variant="info">
        Create New User
      </Button>
      <UsersList {...props} />
    </>
  );
};

export default AdminContainer;
