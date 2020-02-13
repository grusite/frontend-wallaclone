import { combineReducers, compose } from 'redux';
import user from './user';
import adverts from './adverts';
import tags from './tags';
import ui from './ui';

const lastActionReducerEnhancer = reducer => (
  { lastAction, ...state },
  action
) => ({
  ...reducer(state, action),
  lastAction: action
});

const createRootReducer = compose(lastActionReducerEnhancer, combineReducers);

export default createRootReducer({
  user,
  adverts,
  tags,
  ui
});
