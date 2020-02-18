import { compose } from '../../utils/compose';

import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import AdvertDetail from './AdvertDetail';
import withAdverts from '../../hocs/withAdverts';
import withUi from '../../hocs/withUi';

export default compose(
  withAdverts,
  withUi,
  withRouter,
  withTranslation()
)(AdvertDetail);
