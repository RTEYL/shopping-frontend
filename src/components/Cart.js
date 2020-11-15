import cuid from 'cuid'

const Cart = (props) => {
  return (
    <div className='cart'>
      {props.items.map((item) => (
        <li key={cuid()}>
            <p>{ item.count + 'X' } </p>
            <p>{item.name} <button onClick={()=>props.removeFromCart(item)} >x</button></p>
            <p>${item.price * item.count}</p>
        </li>
          )
        )
      }
    </div>
  )
}

export default Cart