export function fetchItems(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/items')
    .then(resp=>resp.json())
    .then(json=>dispatch({type: 'ADD_ITEM', payload: json}))
  }
}