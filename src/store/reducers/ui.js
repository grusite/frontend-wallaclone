import { LOGOUT, RESET_UI } from '../actionTypes'

const defaultState = {
  isFetching: false,
  status: false,
  error: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case (action.type.match(/_REQUEST$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: true,
        status: false,
        error: null,
      })
    case (action.type.match(/_SUCCESS$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: false,
        status: true,
        error: null,
      })
    case (action.type.match(/_FAILURE$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: false,
        status: false,
        error: action.error,
      })
    case RESET_UI || LOGOUT:
      return defaultState
    default:
      return state
  }
}
