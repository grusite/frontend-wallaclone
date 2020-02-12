import { SIGNUP, LOGIN, LOGOUT } from "../actions/actionTypes";

const defaultState = {
  isLoggedIn: false,
  name: "",
  email: "",
  password: "",
  remindMe: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP:
      return Object.assign({}, state, {
        isLoggedIn: false,
        name: action.name,
        email: action.email,
        password: action.password,
      });
    case LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: true,
        name: action.name,
        password: action.password,
        remindMe: action.remindMe
      });
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
