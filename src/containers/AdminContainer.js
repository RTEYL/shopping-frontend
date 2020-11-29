import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import ItemsList from "../components/admin/ItemsList";
import UsersList from "../components/admin/UsersList";

const AdminContainer = (props) => {
  return (
    <Tabs defaultActiveKey="Items" id="admin-tab-pannel">
      <Tab eventKey="Items" title="Items">
        <Button
          onClick={() => {
            props.history.push(`/admin/items/create`);
          }}
          size="sm"
          variant="info">
          Create New Item
        </Button>
        <ItemsList {...props} />
      </Tab>
      <Tab eventKey="Users" title="Users">
        <Button
          onClick={() => {
            props.history.push(`/admin/users/create`);
          }}
          size="sm"
          variant="info">
          Create New User
        </Button>
        <UsersList {...props} />
      </Tab>
    </Tabs>
  );
};

export default AdminContainer;
