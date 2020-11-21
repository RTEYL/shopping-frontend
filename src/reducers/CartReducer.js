const initialState = {
  items: [],
  itemCount: null,
  active: false
}

let i;

export default function cartReducer(state = initialState, { type, payload }){
  switch (type) {

    case 'ADD_TO_CART':
      if (!payload.count || payload.count === 0) {
        payload.count = 1
        return { ...state, items: state.items.concat(payload), itemCount: state.itemCount + 1, active: true }
      }else{
        i = state.items.indexOf(payload)
        state.items[i].count += 1
        return { ...state, items: [...state.items], itemCount: state.itemCount + 1, active: true }
      }

    case 'REMOVE_FROM_CART':
      if (payload.count === 1) {
        payload.count -=1
        return {...state, items: state.items.filter(item=>item.id !== payload.id), itemCount: state.itemCount - 1}
      }else{
        i = state.items.indexOf(payload)
        state.items[i].count -= 1
        return {...state, items: [...state.items], itemCount: state.itemCount - 1}
      }

    case 'SET_ACTIVE':
      return {...state, active: payload}

    case 'CHECK_OUT':
      return {...state, items: [], itemCount: null, active: false}
  default:
    return state
  }
}
