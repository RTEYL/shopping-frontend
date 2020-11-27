export const deleteItem = (item) => {
  let configObj = {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/items/${item.id}`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: "DELETE_ITEM", payload: item });
      });
  };
};
export const updateItem = ({ item, history }) => {
  let configObj = {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/items/${item.id}`, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: "UPDATE_ITEM", payload: item });
        history.push("/admin");
      });
  };
};