import Item from "./Item";

const Items = (props) => {
  const renderItems = () => {
    return props.items.map((item) => {
      return <Item addToCart={props.addToCart} key={item.id} item={item} />;
    });
  };
  return <>{renderItems()}</>;
};

export default Items;
