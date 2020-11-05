const initialState = {
  items: [],
  itemCount: null,
  active: false
}

export default function cartReducer(state = initialState, { type, payload }){
  switch (type) {

  case 'ADD_TO_CART':
    return { ...state, items: state.items.concat(payload.item) }

  case 'REMOVE_FROM_CART':
    return {...state, items: state.items.filter(item=>item.id !== payload.item.id)}
  default:
    return state
  }
}
