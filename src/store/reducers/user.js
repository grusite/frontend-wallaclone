import { SAVE_SESSION_SUCCESS, GET_USER_SUCCESS, LOGOUT } from '../actionTypes';

const defaultState = {
  name: '',
  email: '',
  token: '',
  remindMe: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_SESSION_SUCCESS:
      return Object.assign({}, state, {
        token: action.token,
        remindMe: action.remindMe
      });
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        name: action.user.name,
        email: action.user.email
      });
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
