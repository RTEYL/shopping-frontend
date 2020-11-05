const initialState = {
  items: []
}

export default function itemsReducer(state = initialState, { type, payload }) {
  switch (type) {

  case 'ADD_ITEM':
    return { ...state, items: state.items.concat(payload)}

  default:
    return state
  }
}
