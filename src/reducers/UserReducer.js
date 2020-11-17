const initialState = {
  user: {}
}

export default function UserReducer(state = initialState, { type, payload }){
  switch (type) {

  case 'IS_LOGGED_IN':
    return { ...state, user: payload.user,  logged_in: payload.logged_in }
  case 'LOG_IN':
    return { ...state, user: payload.user, logged_in: payload.logged_in }
  case 'LOG_OUT':
    return { ...state, user: {}, logged_in: payload.logged_in }
  case 'AUTH_ERROR':
    return { ...state, user: { ...state.user, errors: payload}}
  case 'REMOVE_ERRORS':
    return {...state, user: { ...state.user, errors: '' }}

  default:
    return state
  }
}
