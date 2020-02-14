import * as TYPES from './actionTypes';
import {
  register,
  traditionalLogin,
  getUser,
  getTags,
  filterAdverts,
  getAdvertById,
  updateAd,
  createAd
} from '../services/AdsAPIService';

export const callRequest = () => ({
  type: TYPES.CALL_REQUEST
});

export const callSuccess = status => ({
  type: TYPES.CALL_SUCCESS,
  status
});

export const callFailure = error => ({
  type: TYPES.CALL_FAILURE,
  error
});

export const saveSession = (token, remindMe, status) => ({
  type: TYPES.SAVE_SESSION_SUCCESS,
  token,
  remindMe,
  status
});

export const getUserSuccess = (user, status) => ({
  type: TYPES.GET_USER_SUCCESS,
  user,
  status
});

export const logout = () => ({
  type: TYPES.LOGOUT
});

export const loadTagsSuccess = (tags, status) => ({
  type: TYPES.TAGS_LOAD_SUCCESS,
  tags,
  status
});

// // TODO Ver si es necesario o no
// export const createAdvertsSuccess = (advert,status) => ({
//   type: TYPES.ADVERTS_CREATE_SUCCESS,
//   advert,
//   status
// });

// // TODO Ver si es necesario o no
// export const updateAdvertsSuccess = (advert,status) => ({
//   type: TYPES.ADVERTS_UPDATE_SUCCESS,
//   advert,
//   status
// });

export const fetchAdvertsSuccess = (adverts, status) => ({
  type: TYPES.FETCH_ADVERTS_SUCCESS,
  adverts,
  status
});

export const fetchAdvertSuccess = (advert, status) => ({
  type: TYPES.FETCH_ADVERT_SUCCESS,
  advert,
  status
});

export const userRegister = (name, email, password) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    const res = await register({ name, email, password });
    dispatch(callSuccess(res.data.status));
    history.push('/login');
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const userTraditionalLogin = (email, password, remindMe) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    const res = await traditionalLogin({ email, password });
    console.log('res', res);
    dispatch(saveSession(res.data.data.bearer, remindMe, res.data.status));
    history.push('/');
  } catch (error) {
    dispatch(callFailure(error));
  }
};

// export const userGoogleLogin = (email, password, remindMe) => async (
//   dispatch,
//   _getState,
//   { history }
// ) => {
//   dispatch(callRequest());
//   try {
//     const res = await googleLogin(email, password);
//     dispatch(saveSession(res.data.data.bearer, remindMe));
//     history.push('/');
//   } catch (error) {
//     dispatch(callFailure(error));
//   }
// };

// export const userFacebookLogin = (email, password, remindMe) => async (
//   dispatch,
//   _getState,
//   { history }
// ) => {
//   dispatch(callRequest());
//   try {
//     const res = await facebookLogin(email, password);
//     dispatch(saveSession(res.data.data.bearer, remindMe));
//     history.push('/');
//   } catch (error) {
//     dispatch(callFailure(error));
//   }
// };

export const getUserRequest = () => async dispatch => {
  dispatch(callRequest());
  try {
    const res = await getUser();
    dispatch(getUserSuccess(res.data.data, res.data.status));
  } catch (error) {
    console.log('error', error);
    dispatch(callFailure(error));
  }
};

export const userLogout = (...args) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(logout());
  history.push('/login');
};

export const fetchAdverts = params => async dispatch => {
  dispatch(callRequest());
  try {
    const res = await filterAdverts(params);
    dispatch(fetchAdvertsSuccess(res.data.data, res.data.status));
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const fetchAdvertById = advertId => async dispatch => {
  dispatch(callRequest());
  try {
    const res = await getAdvertById(advertId);
    dispatch(fetchAdvertSuccess(res.data.data, res.data.status));
  } catch (error) {
    dispatch(callFailure(error));
  }
};

// export const updateAdvert = (advert, advertId) => async (
//   dispatch,
//   _getState,
//   { history }
// ) => {
//   dispatch(callRequest());
//   try {
//     const res = await updateAd(advert, advertId);
//     dispatch(updateAdvertsSuccess(res.data.data, res.data.status));
//     setTimeout(() => history.push('/advert/'`${res.data._id}`), 2000);
//   } catch (error) {
//     dispatch(callFailure(error));
//   }
// };

// export const createAdvert = advert => async (
//   dispatch,
//   _getState,
//   { history }
// ) => {
//   dispatch(callRequest());
//   try {
//     const res = await createAd(advert);
//     dispatch(createAdvertsSuccess(res.data.data, res.data.status));
//     setTimeout(() => history.push('/advert/'`${res.data._id}`), 2000);
//   } catch (error) {
//     dispatch(callFailure(error));
//   }
// };

export const loadTags = () => async dispatch => {
  dispatch(callRequest());
  try {
    const res = await getTags();
    dispatch(loadTagsSuccess(res.data.data, res.data.status));
  } catch (error) {
    dispatch(callFailure(error));
  }
};
