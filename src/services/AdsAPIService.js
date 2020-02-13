const API = 'http://localhost:8080';

export const register = async user => {
  let response = await fetch(`${API}/user/register`, {
    method: 'POST',
    body: user,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};

export const login = async user => {
  let response = await fetch(`${API}/user/login`, {
    method: 'POST',
    body: user,
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
