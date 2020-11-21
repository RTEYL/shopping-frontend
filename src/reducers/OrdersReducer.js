const initialState = {

}

export default function OrdersReducer (state = initialState, { type, payload }){
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}
