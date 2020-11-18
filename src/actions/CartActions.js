export const addToCart = (item) => {
  return dispatch => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }
}
export const removeFromCart = (item) => {
  return dispatch => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item})
  }
}

export const setActive = (bool) => {
  return dispatch => {
    dispatch({type: 'SET_Active', payload: bool})
  }
}