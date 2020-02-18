import * as TYPES from '../actionTypes'

const defaultState = []

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ADVERTS_SUCCESS:
      return action.adverts
    case TYPES.FETCH_ADVERT_SUCCESS:
      return action.advert
    // case TYPES.ADVERTS_CREATE_SUCCESS:
    //   return Object.assign({}, state, action.advert);
    // case TYPES.ADVERTS_UPDATE_SUCCESS:
    //   return Object.assign({}, state, action.advert);
    case TYPES.LOGOUT:
      return defaultState
    default:
      return state
  }
}
