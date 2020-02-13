import * as TYPES from '../actions/actionTypes';

const defaultState = {
  adverts: [],
  tags: [],
  ui: {
    isFetching: false,
    error: null
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case (action.type.match(/_REQUEST$/) || {}).input:
      return Object.assign({}, state, {
        ui: {
          isFetching: true,
          error: null
        }
      });
    case TYPES.FETCH_ADVERTS_SUCCESS:
      return Object.assign({}, state, {
        adverts: action.adverts,
        ui: {
          isFetching: false,
          error: null
        }
      });
    case TYPES.FETCH_ADVERT_SUCCESS:
      return Object.assign({}, state, {
        advertById: action.advert,
        ui: {
          isFetching: false,
          error: null
        }
      });
    case TYPES.TAGS_LOAD_SUCCESS:
      return Object.assign({}, state, {
        tags: action.tags,
        ui: {
          isFetching: false,
          error: null
        }
      });
    case TYPES.ADVERTS_CREATE_SUCCESS:
      return Object.assign({}, state, {
        advertCreated: action.advert,
        ui: {
          isFetching: false,
          error: null
        }
      });
    case TYPES.ADVERTS_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        advertUpdated: action.advert,
        ui: {
          isFetching: false,
          error: null
        }
      });
    case (action.type.match(/_FAILURE$/) || {}).input:
      return Object.assign({}, state, {
        ui: {
          isFetching: false,
          error: action.error
        }
      });
    default:
      return state;
  }
};
