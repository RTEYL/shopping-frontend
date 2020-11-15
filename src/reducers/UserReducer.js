const initialState = {
  user: {},
  logged_in: false
}

export default function UserReducer(state = initialState, { type, payload }){
  switch (type) {

  case 'IS_LOGGED_IN':
    return { ...state, logged_in: payload.logged_in }
  case 'LOG_IN':
    return { ...state, user: payload.user, logged_in: payload.logged_in }
  case 'LOG_OUT':
    return { ...state, logged_in: payload.logged_in }
  case 'AUTH_ERROR':
    return { ...state, user: { errors: payload}}

  default:
    return state
  }
}
