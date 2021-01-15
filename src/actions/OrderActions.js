import { token } from "./Fetch";

export const createOrder = (order) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_ORDER", payload: order });
  };
};

export const checkout = (payload) => {
  let url;
  payload.order_data.purchase_date = new Date().toLocaleDateString();
  if (payload.user) {
    url = `https://shopping-center-api.herokuapp.com/api/v1/users/${payload.user.id}/orders`;
  } else {
    url = `https://shopping-center-api.herokuapp.com/guest/orders`;
  }
  let configObj = {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  };
  return (dispatch) => {
    fetch(url, configObj)
      .then((resp) => resp.json())
      .then((json) => {
        if (!!json.errors) {
          throw (new Error().message = json.errors);
        } else {
          dispatch({ type: "CHECK_OUT", payload: json });
          dispatch({ type: "CREATE_ORDER", payload: json.order });
          payload.user
            ? payload.history.push(`/users/${payload.user.id}/orders`)
            : payload.history.push("/");
        }
      })
      .catch((err) => {
        dispatch({ type: "ADD_ERROR", payload: err });
      });
  };
};

export const fetchOrders = (user) => {
  let configObj = {
    credentials: "include",
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    fetch(
      `https://shopping-center-api.herokuapp.com/api/v1/users/${user.id}/orders`,
      configObj
    )
      .then((resp) => resp.json())
      .then((json) => {
        if (json.status === 201) {
          dispatch({ type: "CREATE_ORDER", payload: json.orders });
        }
      })
      .catch((err) => {
        dispatch({ type: "ADD_ERROR", payload: err });
      });
  };
};
