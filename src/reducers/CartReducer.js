const initialState = {
  items: [],

}

export default function cartReducer(state = initialState, { type, payload }){
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}
