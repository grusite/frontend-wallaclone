import client from '../utils/client';

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

export const googleLogin = async payload => {
  return await client({
    method: 'post',
    url: '/user/login',
    data: {
      provider: 'google',
      payload: payload.idToken
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

export const verifyRegister = async payload => {
  return await client({
    method: 'post',
    url: '/user/register/verify',
    data: {
      token: payload.token
    }
  });
};

export const verifyResendRegister = async payload => {
  return await client({
    method: 'post',
    url: '/user/register/verify-resend',
    data: {
      email: payload.email,
      password: payload.password
    }
  });
};

export const forgotPassword = async payload => {
  return await client({
    method: 'post',
    url: '/user/register/forgot-password',
    data: {
      email: payload.email
    }
  });
};

export const changePassword = async payload => {
  return await client({
    method: 'post',
    url: '/user/register/change-password',
    data: {
      token: payload.token,
      password: payload.password
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
  return await client({
    method: 'post',
    url: '/apiv1/anuncios',
    data: advert
  });
};

export const updateAd = async (advert, id) => {
  return await client({
    method: 'put',
    url: `/apiv1/anuncios/${id}`,
    data: advert
  });
};
