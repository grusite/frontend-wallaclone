import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import storage from './utils/storage';
import {
  getUserRequest,
  resetUi,
  fetchAdverts,
  loadTags
} from './store/actions';
import { isUserRegistered } from './store/selectors';
import * as TYPES from './store/actionTypes';

// import './index.css'
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

const renderApp = props => {
  ReactDOM.render(<Root {...props} />, document.getElementById('root'));
};

// histórico del browser
const history = createBrowserHistory();

// cargamos la session que hubiese en localStorage
const { setItem, getItem } = storage();
const session = JSON.parse(getItem('Wallaclone-User')) || undefined;

// configuramos un store, pasando los datos de la sesion como estado inicial
export const store = configureStore({
  history
})({
  user: session
});

// cuando haya un cambio en el store, sincronizamos localStorage
store.subscribe(() => {
  const { lastAction, user } = store.getState();

  if (lastAction.type === TYPES.SAVE_SESSION_SUCCESS) {
    store.dispatch(getUserRequest());
    if (lastAction.remindMe) setItem('Wallaclone-User', JSON.stringify(user));
  }

  if (lastAction.type === TYPES.LOGOUT) {
    localStorage.clear();
  }
  // I reset the UI after every redux call to be clean after redirection
  if (
    lastAction.type.match(/_SUCCESS$/) ||
    lastAction.type.match(/_FAILURE$/)
  ) {
    setTimeout(() => {
      store.dispatch(resetUi());
    }, 500);
  }
});

// loads user and his adverts in every reload if registered
if (isUserRegistered(store.getState())) {
  store.dispatch(getUserRequest());
  store.dispatch(fetchAdverts());
  store.dispatch(loadTags());
}

renderApp({ store, history });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
