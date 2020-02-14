import client from '../utils/client';

const API = 'http://localhost:8080';

export const traditionalLogin = async payload => {
  return await client({
    method: 'post',
    url: '/user/login',
    data: {
      provider: 'traditional',
      payload: {
        email: payload.email,
        password: payload.password
      }
    }
  });
};

export const register = async payload => {
  return await client({
    method: 'post',
    url: '/user/register',
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password
    }
  });
};

export const login = async (email, password) => {
  let response = await fetch(`${API}/user/login`, {
    method: 'POST',
    body: [email, password],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};

export const getUser = async () => {
  let response = await fetch(`${API}/user`);
  let data = response.json();
  return data;
};

export const getAdverts = async () => {
  let response = await fetch(`${API}/apiv1/anuncios/`);
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const getAdvertById = async id => {
  let response = await fetch(`${API}/apiv1/anuncios/${id}`);
  let data = await response.json();
  let result = await data.result;
  return result;
};

export const filterAdverts = async params => {
  let response = await fetch(`${API}/apiv1/anuncios?${params}`);
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const getTags = async () => {
  let response = await fetch(`${API}/apiv1/anuncios/tags`, {
    method: 'GET'
  });
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const createAd = async advert => {
  let response = await fetch(`${API}/apiv1/anuncios`, {
    method: 'POST',
    body: JSON.stringify(advert),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};

export const updateAd = async (advert, id) => {
  let response = await fetch(`${API}/apiv1/anuncios/${id}`, {
    method: 'PUT',
    // data can be `string` or {object}
    body: JSON.stringify(advert),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};
