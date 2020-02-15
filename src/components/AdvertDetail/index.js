import { compose } from '../../utils/compose'

import AdvertDetail from './AdvertDetail'
import withAdverts from '../../hocs/withAdverts'
import withUi from '../../hocs/withUi'

export default compose(withAdverts, withUi)(AdvertDetail)
