import { connect } from 'react-redux'

import { getSession, getUser } from '../store/selectors'
import {
  userRegister,
  userVerifyRegister,
  userVerifyResendRegister,
  userForgotPassword,
  userChangePassword,
  userTraditionalLogin,
  getUserRequest,
  userLogout,
} from '../store/actions'

const mapStateToProps = state => ({
  ...state,
  user: getUser(state),
  session: getSession(state),
})

const mapDispatchToProps = {
  userRegister,
  userVerifyRegister,
  userVerifyResendRegister,
  userForgotPassword,
  userChangePassword,
  userTraditionalLogin,
  getUserRequest,
  userLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)
