import { withTranslation } from 'react-i18next'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import { compose } from '../../utils/compose'
import ChangePassword from './ChangePassword'
import withSession from '../../hocs/withSession'
import withUi from '../../hocs/withUi'

export default compose(
  withSession,
  withRouter,
  withUi,
  withTranslation(),
  withSnackbar
)(ChangePassword)
