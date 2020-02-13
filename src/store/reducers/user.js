import { SAVE_SESSION, GET_USER, LOGOUT } from '../actionTypes';

const defaultState = {
  name: '',
  email: '',
  token: '',
  remindMe: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_SESSION:
      return Object.assign({}, state, {
        token: action.token,
        remindMe: action.remindMe
      });
    case GET_USER:
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
