import { CardDeck } from "react-bootstrap";
import Item from "./Item";

const Items = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return <Item addToCart={props.addToCart} key={item.id} item={item} />;
    });
  };
  return (
    <>
      <CardDeck>{renderItems()}</CardDeck>
    </>
  );
};

export default Items;
