import { connect } from 'react-redux';

import { getSession, getUser } from '../store/selectors';
import { userSignUp, userLogin, userLogout } from '../store/actions';

const mapStateToProps = state => ({
  ...state,
  user: getUser(state),
  session: getSession(state)
});

const mapDispatchToProps = {
  userSignUp,
  userLogin,
  userLogout
};

export default connect(mapStateToProps, mapDispatchToProps);
