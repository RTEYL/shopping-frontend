const initialState = {
  completedOrders: []
}

export default function OrdersReducer (state = initialState, { type, payload }){
  switch (type) {

    case 'CREATE_ORDER':
      if (state.completedOrders.includes(payload)){
        return {...state}
      }else{
        return { ...state,
         completedOrders: state.completedOrders.concat(payload)
        }
      }
    case 'LOG_OUT':
      return { ...state, completedOrders: [] }

  default:
    return state
  }
}
