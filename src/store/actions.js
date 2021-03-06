import * as TYPES from './actionTypes'

import {
  register,
  verifyRegister,
  verifyResendRegister,
  forgotPassword,
  changePassword,
  traditionalLogin,
  googleLogin,
  facebookLogin,
  getUser,
  getTags,
  filterAdverts,
  getAdvertById,
  updateAd,
  createAd,
} from '../services/AdsAPIService'

export const callRequest = () => ({
  type: TYPES.CALL_REQUEST,
})

export const callSuccess = () => ({
  type: TYPES.CALL_SUCCESS,
})

export const callFailure = error => ({
  type: TYPES.CALL_FAILURE,
  error,
})

export const saveSessionSuccess = (token, provider, remindMe) => ({
  type: TYPES.SAVE_SESSION_SUCCESS,
  token,
  provider,
  remindMe,
})

export const getUserSuccess = user => ({
  type: TYPES.GET_USER_SUCCESS,
  user,
})

export const logout = () => ({
  type: TYPES.LOGOUT,
})

export const loadTagsSuccess = tags => ({
  type: TYPES.TAGS_LOAD_SUCCESS,
  tags,
})

export const fetchAdvertsSuccess = adverts => ({
  type: TYPES.FETCH_ADVERTS_SUCCESS,
  adverts,
})

export const fetchAdvertSuccess = advert => ({
  type: TYPES.FETCH_ADVERT_SUCCESS,
  advert,
})

export const resetTheUi = () => ({
  type: TYPES.RESET_UI,
})

export const resetUi = () => async (dispatch, _getState, { history }) => {
  dispatch(resetTheUi())
}

export const userRegister = (name, email, password) => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    await register({ name, email, password })
    dispatch(callSuccess())
    setTimeout(() => {
      history.push('/login')
    }, 5000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userVerifyRegister = token => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    await verifyRegister({ token })
    dispatch(callSuccess())
    setTimeout(() => {
      history.push('/login')
    }, 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userVerifyResendRegister = (email, password) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest())
  try {
    await verifyResendRegister({ email, password })
    dispatch(callSuccess())
    setTimeout(() => {
      history.push('/login')
    }, 2000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userForgotPassword = email => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    await forgotPassword({ email })
    dispatch(callSuccess())
    setTimeout(() => {
      history.push('/login')
    }, 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userChangePassword = (token, password) => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    await changePassword({ token, password })
    dispatch(callSuccess())
    setTimeout(() => {
      history.push('/login')
    }, 2000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userTraditionalLogin = (email, password, remindMe) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest())
  try {
    const res = await traditionalLogin({ email, password })
    dispatch(saveSessionSuccess(res.data.data.bearer, 'traditional', remindMe))
    setTimeout(() => {
      history.push('/')
    }, 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userGoogleLogin = (idToken, remindMe) => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    const res = await googleLogin({ idToken })
    dispatch(saveSessionSuccess(res.data.data.bearer, 'google', remindMe))
    setTimeout(() => {
      history.push('/')
    }, 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userFacebookLogin = (accessToken, remindMe) => async (
  dispatch,
  _getState,
  { history }
) => {
  dispatch(callRequest())
  try {
    const res = await facebookLogin({ accessToken })
    dispatch(saveSessionSuccess(res.data.data.bearer, 'facebook', remindMe))
    setTimeout(() => {
      history.push('/')
    }, 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const getUserRequest = () => async dispatch => {
  dispatch(callRequest())
  try {
    const res = await getUser()
    dispatch(getUserSuccess(res.data.data))
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const userLogout = (...args) => async (dispatch, _getState, { history }) => {
  // If social provider I use manual javascript SDK to logOut
  if (_getState().user.provider === 'google' && window.gapi) {
    // TODO meter botones de logout de FB o de GGL dependiendo del proveder en el frontal
    // GET "https://www.facebook.com/x/oauth/logout?access_token="
    // POST "https://accounts.google.com/o/oauth2/revoke" token=xx de body
    // Check this apis to get both tokens using the id in the DB and make a logout in the DB
    // Or better, check documentation of FB and OAuth2Client npm packages to get the tokens
    window.gapi.auth2.getAuthInstance().signOut()
    window.gapi.auth2.getAuthInstance().disconnect()
  }
  if (_getState().user.provider === 'facebook' && window.FB) window.FB.logout()
  dispatch(logout())
  history.push('/login')
}

export const fetchAdverts = params => async dispatch => {
  dispatch(callRequest())
  try {
    const res = await filterAdverts(params)
    dispatch(fetchAdvertsSuccess(res.data.data))
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const fetchAdvertById = advertId => async dispatch => {
  dispatch(callRequest())
  try {
    const res = await getAdvertById(advertId)
    dispatch(fetchAdvertSuccess(res.data.data))
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const updateAdvert = (advert, advertId) => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    const res = await updateAd(advert, advertId)
    dispatch(callSuccess())
    setTimeout(() => history.push(`/advert/${res.data.data._id}`), 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const createAdvert = advert => async (dispatch, _getState, { history }) => {
  dispatch(callRequest())
  try {
    const res = await createAd(advert)
    dispatch(callSuccess())
    setTimeout(() => history.push(`/advert/${res.data.data._id}`), 1000)
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}

export const loadTags = () => async dispatch => {
  dispatch(callRequest())
  try {
    const res = await getTags()
    dispatch(loadTagsSuccess(res.data.data))
  } catch (error) {
    dispatch(callFailure(error.response.data.error))
  }
}
