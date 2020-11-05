export function addToCart(item){
  const count = (item) => item.count ? item.count += 1 : item.count = 1
  count(item)
  return dispatch => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  }
}
export function removeFromCart(item){
  item.count -= 1
  return dispatch => {
    dispatch({type: 'REMOVE_FROM_CART', payload: item})
  }
}