import * as TYPES from '../actionTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ADVERTS_SUCCESS:
      return Object.assign({}, state, {
        adverts: action.adverts
      });
    case TYPES.FETCH_ADVERT_SUCCESS:
      return Object.assign({}, state, {
        advertById: action.advert
      });
    case TYPES.ADVERTS_CREATE_SUCCESS:
      return Object.assign({}, state, {
        advertCreated: action.advert
      });
    case TYPES.ADVERTS_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        advertUpdated: action.advert
      });
    default:
      return state;
  }
};
