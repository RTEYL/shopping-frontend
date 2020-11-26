const initialState = {
  items: [],
};

export default function itemsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_ITEM":
      return { ...state, items: state.items.concat(payload) };

    case "SORT_ITEMS":
      return { ...state, items: payload };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
}
