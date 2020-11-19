import cuid from 'cuid'
import { Button, ListGroup } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <div className={'cart'}>
      {props.items.map((item) => (
        <ListGroup variant="flush" key={cuid()}>
          <ListGroup.Item>
            {item.name}
            <br/>
             ${ item.price } x { item.count }
             <Button size="sm" variant='danger' onClick={()=>props.removeFromCart(item)} >x</Button>
              <p>Total ${item.price * item.count}</p>
          </ListGroup.Item>
        </ListGroup>
          )
        )
      }
    </div>
  )
}
export default Cart