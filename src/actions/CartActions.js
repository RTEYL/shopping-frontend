export function addToCart(item){
  return dispatch => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }
}
export function removeFromCart(item){
  return dispatch => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item})
  }
}

export function setActive(bool){
  return dispatch => {
    dispatch({type: 'SET_Active', payload: bool})
  }
}