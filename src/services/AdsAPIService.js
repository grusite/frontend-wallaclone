const API = 'http://localhost:3000/apiv1';

export const register = async payload => {
  let response = await fetch(`${API}/register`, {
    method: 'POST',
    body: payload,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};

export const login = async payload => {
  let response = await fetch(`${API}/login`, {
    method: 'POST',
    body: payload,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  let data = response.json();
  return data;
};

export const getAdverts = async () => {
  let response = await fetch(`${API}/anuncios/`);
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const getAdvertById = async id => {
  let response = await fetch(`${API}/anuncios/${id}`);
  let data = await response.json();
  let result = await data.result;
  return result;
};

export const filterAdverts = async params => {
  let response = await fetch(`${API}/anuncios?${params}`);
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const getTags = async () => {
  let response = await fetch(`${API}/anuncios/tags`, {
    method: 'GET'
  });
  let data = await response.json();
  let results = await data.results;
  return results;
};

export const createAd = async advert => {
  let response = await fetch(`${API}/anuncios`, {
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
  let response = await fetch(`${API}/anuncios/${id}`, {
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
