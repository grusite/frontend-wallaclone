const defaultState = {
  isFetching: false,
  status: true,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case (action.type.match(/_REQUEST$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      });
    case (action.type.match(/_SUCCESS$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: false,
        status: action.status,
        error: null
      });
    case (action.type.match(/_FAILURE$/) || {}).input:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
};
