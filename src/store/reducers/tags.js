import * as TYPES from '../actionTypes';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.TAGS_LOAD_SUCCESS:
      return Object.assign({}, state, action.tags);
    default:
      return state;
  }
};
