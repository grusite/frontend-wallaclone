import axios from 'axios';
import { store } from '../';
// import { apiUrl } from '../parameters'
import Debug from 'debug';
import { userLogout } from '../store/actions';
import { isUserRegistered } from '../store/selectors';

const debug = Debug('app:request');

const apiUrl = 'http://localhost:8080';

const request = axios.create({
  baseURL: apiUrl,
  timeout: 10000
});

request.interceptors.response.use(undefined, function(err) {
  if (err.status === 401) {
    store.dispatch(userLogout());
  }
  throw err;
});

export default async function client(opts) {
  if (isUserRegistered(store.getState())) {
    opts.headers = {
      ...opts.headers,
      Authorization: `Bearer ${store.state.root.token}`
    };
  }
  try {
    debug('start', opts);
    const res = await request(opts);
    debug('success', res.data);
    return res;
  } catch (err) {
    debug('error', err.response ? err.response.data : err.message);
    throw err;
  }
}
