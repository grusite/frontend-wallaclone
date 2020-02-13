import * as TYPES from './actionTypes';
import {
  register,
  login,
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

export const callSuccess = () => ({
  type: TYPES.CALL_SUCCESS
});

export const callFailure = error => ({
  type: TYPES.CALL_FAILURE,
  error
});

export const saveSession = (token, remindMe) => ({
  type: TYPES.SAVE_SESSION,
  token,
  remindMe
});

export const getUserSuccess = user => ({
  type: TYPES.GET_USER,
  user
});

export const logout = () => ({
  type: TYPES.LOGOUT
});

export const loadTagsSuccess = tags => ({
  type: TYPES.TAGS_LOAD_SUCCESS,
  tags
});

// TODO Ver si es necesario o no
export const createAdvertsSuccess = advert => ({
  type: TYPES.ADVERTS_CREATE_SUCCESS,
  advert
});

// TODO Ver si es necesario o no
export const updateAdvertsSuccess = advert => ({
  type: TYPES.ADVERTS_UPDATE_SUCCESS,
  advert
});

export const fetchAdvertsSuccess = adverts => ({
  type: TYPES.FETCH_ADVERTS_SUCCESS,
  adverts
});

export const fetchAdvertSuccess = advert => ({
  type: TYPES.FETCH_ADVERT_SUCCESS,
  advert
});

export const userRegister = (email, password, provider) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    await register(email, password, provider);
    dispatch(callSuccess());
    history.push('/login');
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const userLogin = (email, password, remindMe) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    const res = await login(email, password);
    dispatch(saveSession(res.data.bearer, remindMe));
    history.push('/');
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const getUserRequest = () => async dispatch => {
  dispatch(callRequest());
  try {
    const user = await getUser();
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const userLogout = (...args) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(logout());
  history.push('/register');
};

export const userSignUp = (...args) => (dispatch, _getState, { history }) => {
  // meter llamada API
  history.push('/login');
};

export const fetchAdverts = params => async dispatch => {
  dispatch(callRequest());
  try {
    const adverts = await filterAdverts(params);
    dispatch(fetchAdvertsSuccess(adverts));
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const fetchAdvertById = advertId => async dispatch => {
  dispatch(callRequest());
  try {
    const advert = await getAdvertById(advertId);
    dispatch(fetchAdvertSuccess(advert));
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const updateAdvert = (advert, advertId) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    const updatedAd = await updateAd(advert, advertId);
    dispatch(updateAdvertsSuccess(updatedAd));
    setTimeout(() => history.push('/advert/'`${updatedAd._id}`), 2000);
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const createAdvert = advert => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest());
  try {
    const newAd = await createAd(advert);
    dispatch(createAdvertsSuccess(newAd));
    setTimeout(() => history.push('/advert/'`${newAd._id}`), 2000);
  } catch (error) {
    dispatch(callFailure(error));
  }
};

export const loadTags = () => async dispatch => {
  dispatch(callRequest());
  try {
    const tags = await getTags();
    dispatch(loadTagsSuccess(tags));
  } catch (error) {
    dispatch(callFailure(error));
  }
};
