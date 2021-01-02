export const sortByPrice = (items, method) => {
  let sortArr = [...items];
  if (method === "lowest") {
    sortArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (method === "highest") {
    sortArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else {
    sortArr.sort((a, b) => a.id - b.id);
  }
  return (dispatch) => {
    dispatch({ type: "SORT_ITEMS", payload: sortArr });
  };
};
export const fetchItems = () => {
  return (dispatch) => {
    fetch("https://shopping-center-api.herokuapp.com/api/v1/items")
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "ADD_ITEM", payload: json }))
      .catch((err) => console.log("fetch error", err));
  };
};
