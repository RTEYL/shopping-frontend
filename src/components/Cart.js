import cuid from 'cuid'
import { Button, ListGroup } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <div className={'cart'}>
      {props.items.map((item) => (
        <ListGroup variant="flush" key={cuid()}>
          <ListGroup.Item>
            {item.name}
             <Button size="sm" variant='danger' onClick={()=>props.removeFromCart(item)} >x</Button>
            <br/>
            <p>${item.price * item.count + ' - '}
            <small>{ item.count } x ${ item.price }</small>
            </p>
          </ListGroup.Item>
        </ListGroup>
          )
        )
      }
    </div>
  )
}
export default Cart