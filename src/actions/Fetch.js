export function fetchItems(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/items')
    .then(resp=>resp.json())
    .then(json=>dispatch({type: 'ADD_ITEM', payload: json}))
    .catch(err=>console.log('fetch error', err))
  }
}

export function fetchLoggedInUser(){
  return async (dispatch) => {
    fetch('http://localhost:3000/logged_in',{withCredentials: true})
    .then(resp=>resp.json())
    .then(json=>dispatch({type: 'IS_LOGGED_IN', payload: json}))
    .catch(err=>console.log('fetch error', err))
  }
}