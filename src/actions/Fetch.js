import { fetchOrders } from "./OrderActions";
export const fetchLoggedInUser = () => {
  return async (dispatch) => {
    fetch("https://shopping-center-api.herokuapp.com/logged_in", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "IS_LOGGED_IN", payload: json }))
      .catch((err) => console.log("fetch error", err));
  };
};

export const loginUser = (payload) => {
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
    fetch("https://shopping-center-api.herokuapp.com/login", configObj)
      .then((resp) => resp.json())
      .then((json) => {
        if (!!json.errors) {
          throw (new Error().message = json.errors);
        } else {
          dispatch(fetchOrders(json.user));
          dispatch({ type: "LOG_IN", payload: json });
          payload.history.push("/");
        }
      })
      .catch((err) => {
        dispatch({ type: "ADD_ERROR", payload: err });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    fetch("https://shopping-center-api.herokuapp.com/logout", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "LOG_OUT" }));
  };
};

export const userSignUp = (payload) => {
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
    fetch("https://shopping-center-api.herokuapp.com/sign_up", configObj)
      .then((resp) => resp.json())
      .then((json) => {
        if (!!json.errors) {
          throw (new Error().message = json.errors);
        } else {
          dispatch({ type: "LOG_IN", payload: json });
          payload.history.push("/");
        }
      })
      .catch((err) => {
        dispatch({ type: "ADD_ERROR", payload: err });
      });
  };
};
