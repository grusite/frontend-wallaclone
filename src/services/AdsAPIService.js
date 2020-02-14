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

export const googleLogin = async () => {
  await window.gapi.auth2.getAuthInstance().signIn();
  const user = window.gapi.auth2.getAuthInstance().currentUser.get();
  const idToken = user.getAuthResponse().id_token;
  return await client({
    method: 'post',
    url: '/user/login',
    data: {
      provider: 'google',
      payload: { idToken }
    }
  });
};

export const facebookLogin = async payload => {
  return await client({
    method: 'post',
    url: '/user/login',
    data: {
      provider: 'login',
      payload: {
        accessToken: payload.accessToken
      }
    }
  });
};

export const getUser = async () => {
  return await client({
    method: 'get',
    url: '/user'
  });
};

export const getAdverts = async () => {
  return await client({
    method: 'get',
    url: '/apiv1/anuncios/'
  });
};

export const getAdvertById = async id => {
  return await client({
    method: 'get',
    url: `/apiv1/anuncios/${id}`
  });
};

export const filterAdverts = async params => {
  return await client({
    method: 'get',
    url: `/apiv1/anuncios?${params}`
  });
};

export const getTags = async () => {
  return await client({
    method: 'get',
    url: '/apiv1/anuncios/tags'
  });
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
