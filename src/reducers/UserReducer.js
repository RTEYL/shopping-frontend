const initialState = {
  user: {},
  errors: "",
  logged_in: false,
  isAdmin: false,
};

export default function UserReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "IS_LOGGED_IN":
      return {
        ...state,
        user: payload.user,
        logged_in: payload.logged_in,
        isAdmin: payload.user.admin,
      };
    case "LOG_IN":
      return {
        ...state,
        user: payload.user,
        logged_in: payload.logged_in,
        errors: "",
        isAdmin: payload.user.admin,
      };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        logged_in: false,
        errors: "",
        isAdmin: false,
      };
    case "ADD_ERROR":
      return { ...state, errors: payload };
    case "REMOVE_ERRORS":
      return { ...state, errors: "" };

    default:
      return state;
  }
}
