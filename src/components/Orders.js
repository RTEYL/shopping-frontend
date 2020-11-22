import Order from '../components/Order'

const Orders = (props) => {
  const renderOrders = () => {
    return props.orders.map(order=>{
      return <Order key={order.id} order={order} />
    })
  }
  return (
    <>
    orders
      {renderOrders()}
    </>
  )
}

export default Orders
