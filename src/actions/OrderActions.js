export const createOrder = (order) => {
  return dispatch => {
    dispatch({type: 'CREATE_ORDER', payload: order})
  }
}