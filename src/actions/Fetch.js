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

export function loginUser(user){
  let configObj = {
    withCredentials: true,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
  return (dispatch) => {
    fetch('http://localhost:3000/login',configObj)
    .then(resp=>resp.json())
    .then(json=>{
      if (!!json.errors) {
         throw new Error().message = json.errors
      }else{
        dispatch({type: 'LOG_IN', payload: json})
      }
    })
    .catch(err =>{
      dispatch({type: 'LOG_IN_ERROR', payload: err})
      })
  }
}

export function logoutUser(){
  return (dispatch) => {
    fetch('http://localhost:3000/logout', {
      withCredentials: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(resp=>{console.log(resp.json())})
  }
}