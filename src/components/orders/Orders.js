import Order from "./Order";

const Orders = (props) => {
  const renderOrders = () => {
    return props.orders.map((order) => {
      return <Order key={order.id} order={order} />;
    });
  };
  return <>{renderOrders()}</>;
};

export default Orders;
