const initialState = {
  user: {},
  errors: '',
  logged_in: false
}

export default function UserReducer(state = initialState, { type, payload }){
  switch (type) {
  case 'IS_LOGGED_IN':
    return { ...state, user: payload.user,  logged_in: payload.logged_in }
  case 'LOG_IN':
    return { ...state, user: payload.user, logged_in: payload.logged_in }
  case 'LOG_OUT':
    return { ...state, user: {}, logged_in: false }
  case 'ADD_ERROR':
    return { ...state, errors: payload}
  case 'REMOVE_ERRORS':
    return {...state, errors: '' }

  default:
    return state
  }
}
