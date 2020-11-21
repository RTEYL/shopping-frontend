const initialState = {
  completedOrders: []
}

export default function OrdersReducer (state = initialState, { type, payload }){
  switch (type) {

  case 'CREATE_ORDER':
    debugger
    return { ...state,
       completedOrders: state.completedOrders.concat(payload)
      }

  default:
    return state
  }
}
