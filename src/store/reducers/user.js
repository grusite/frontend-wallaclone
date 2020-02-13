import { SAVE_SESSION, GET_USER, LOGOUT } from '../actions/actionTypes';

const defaultState = {
  // TODO borrar
  isLoggedIn: false,
  user: '',
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
        name: action.name,
        email: action.email
      });
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
