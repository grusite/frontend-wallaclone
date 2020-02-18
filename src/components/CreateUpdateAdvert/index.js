import { withTranslation } from 'react-i18next';
import { withSnackbar } from 'notistack';
import withAdverts from '../../hocs/withAdverts';
import withTags from '../../hocs/withTags';
import withUi from '../../hocs/withUi';

import { compose } from '../../utils/compose';
import CreateUpdateAdvert from './CreateUpdateAdvert';

export default compose(
  withTags,
  withAdverts,
  withUi,
  withSnackbar,
  withTranslation()
)(CreateUpdateAdvert);
