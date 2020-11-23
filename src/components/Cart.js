import cuid from 'cuid'
import { Button, Image, Media } from 'react-bootstrap'

const Cart = (props) => {
  return (
    <div className={'cart'}>
      {props.items.map((item) => (
        <Media as='li' key={cuid()}>
            <Image width={100} height={100} src={item.image} alt={item.name} fluid rounded/>
          <Media.Body>
            {item.name}
             <Button size="sm" variant='danger' onClick={()=>props.removeFromCart(item)} >x</Button>
            <br/>
            <p>${item.price * item.count + ' - '}
            <small>{ item.count } x ${ item.price }</small>
            </p>
          <br/><br/>
          </Media.Body>
        </Media>
          )
        )
      }
    </div>
  )
}
export default Cart