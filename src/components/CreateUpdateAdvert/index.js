import CreateUpdateAdvert from './CreateUpdateAdvert'
import { compose } from '../../utils/compose'
import withAdverts from '../../hocs/withAdverts'
import withTags from '../../hocs/withTags'
import withUi from '../../hocs/withUi'

export default compose(withTags, withAdverts, withUi)(CreateUpdateAdvert)
