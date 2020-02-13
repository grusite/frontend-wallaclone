import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import storage from './utils/storage';
// import { loadTags } from './store/actions/actions';
import * as TYPES from './store/actions/actionTypes';

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
const store = configureStore({
  history
})({
  user: session
});

// cuando haya un cambio en el store, sincronizamos localStorage
store.subscribe(() => {
  const { lastAction, user } = store.getState();

  if (lastAction.type === TYPES.SAVE_SESSION && lastAction.remindMe) {
    setItem('Wallaclone-User', JSON.stringify(user));
  }

  if (lastAction.type === TYPES.LOGOUT) {
    localStorage.clear();
  }
  // cuando tengamos las tags en el store, renderizamos la app
  if (lastAction.type === TYPES.TAGS_LOAD_SUCCESS) {
    renderApp({ store, history });
  }
});

// lanzamos una accion inicial para cargar las tags
// store.dispatch(loadTags());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
