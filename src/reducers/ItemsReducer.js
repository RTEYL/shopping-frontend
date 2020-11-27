const initialState = {
  items: [],
};

export default function itemsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_ITEM":
      return { ...state, items: state.items.concat(payload) };

    case "SORT_ITEMS":
      return { ...state, items: payload };

    case "UPDATE_ITEM":
      const item = state.items.find((i) => i.id === payload.id);
      const i = state.items.indexOf(item);
      return {
        ...state,
        items: {
          ...state.items,
          [i]: payload,
        },
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
}
