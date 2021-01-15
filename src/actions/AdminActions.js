import { token } from "./Fetch";

export const deleteItem = (item) => {
  let configObj = {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    fetch(
      `https://shopping-center-api.herokuapp.com/api/v1/items/${item.id}`,
      configObj
    )
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
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch(
      `https://shopping-center-api.herokuapp.com/api/v1/items/${item.id}`,
      configObj
    )
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: "UPDATE_ITEM", payload: item });
        history.push("/admin");
      });
  };
};
export const createItem = ({ item, history }) => {
  let configObj = {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch("https://shopping-center-api.herokuapp.com/api/v1/items", configObj)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: "ADD_ITEM", payload: json.item });
        history.push("/admin");
      });
  };
};
