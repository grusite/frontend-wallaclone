import CreateUpdateAdvert from './CreateUpdateAdvert'
import { compose } from '../../utils/compose'
import withAdverts from '../../hocs/withAdverts'
import withTags from '../../hocs/withTags'
import withUi from '../../hocs/withUi'
import { withSnackbar } from 'notistack'

export default compose(withTags, withAdverts, withUi, withSnackbar)(CreateUpdateAdvert)
