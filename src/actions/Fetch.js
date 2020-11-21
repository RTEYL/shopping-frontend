export const fetchItems = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/items')
    .then(resp=>resp.json())
    .then(json=>dispatch({type: 'ADD_ITEM', payload: json}))
    .catch(err=>console.log('fetch error', err))
  }
}

export const fetchLoggedInUser = () => {
  return async (dispatch) => {
    fetch('http://localhost:3000/logged_in',{credentials: 'include'})
    .then(resp=>resp.json())
    .then(json=>dispatch({type: 'IS_LOGGED_IN', payload: json}))
    .catch(err=>console.log('fetch error', err))
  }
}

export const loginUser = (payload) => {
  let configObj = {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return (dispatch) => {
    fetch('http://localhost:3000/login',configObj)
    .then(resp=>resp.json())
    .then(json=>{
      if (!!json.errors) {
         throw new Error().message = json.errors
      }else{
        dispatch({type: 'LOG_IN', payload: json})
        payload.history.push('/')
      }
    })
    .catch(err =>{
      dispatch({type: 'ADD_ERROR', payload: err})
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/logout', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => dispatch({type: 'LOG_OUT'}))
  }
}

export const userSignUp = (payload) => {
  let configObj = {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return (dispatch) => {
    fetch('http://localhost:3000/sign_up',configObj)
    .then(resp=>resp.json())
    .then(json=>{
      if (!!json.errors) {
         throw new Error().message = json.errors
      }else{
        dispatch({type: 'LOG_IN', payload: json})
        payload.history.push('/')
      }
    })
    .catch(err =>{
      dispatch({type: 'ADD_ERROR', payload: err})
      })
  }
}

export const checkout = (payload) => {
  let url;
  if (payload.user){
    url = `http://localhost:3000/api/v1/users/${payload.user.id}/orders`
  }else{
    url = `http://localhost:3000/guest/orders`
  }
  let configObj = {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return (dispatch) => {
    fetch(url, configObj)
    .then(resp=>resp.json())
    .then(json=>{
      if (!!json.errors) {
         throw new Error().message = json.errors
      }else{
        dispatch({type: 'CHECK_OUT', payload: json})
        dispatch({type: 'CREATE_ORDER', payload: json.order})
        payload.user ?
          payload.history.push(`/users/${payload.user.id}/orders`)
          :
          payload.history.push('/')
      }
    })
    .catch(err =>{
      dispatch({type: 'ADD_ERROR', payload: err})
      })
  }
}