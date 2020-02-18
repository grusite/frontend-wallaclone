import { SAVE_SESSION_SUCCESS, GET_USER_SUCCESS, LOGOUT } from '../actionTypes'

const defaultState = {
  name: '',
  email: '',
  provider: '',
  token: '',
  remindMe: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_SESSION_SUCCESS:
      return Object.assign({}, state, {
        token: action.token,
        provider: action.provider,
        remindMe: action.remindMe,
      })
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        name: action.user.name,
        email: action.user.email,
      })
    case LOGOUT:
      return defaultState
    default:
      return state
  }
}
