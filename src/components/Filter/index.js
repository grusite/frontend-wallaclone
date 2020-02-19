import { withTranslation } from 'react-i18next'

import { compose } from '../../utils/compose'
import Filter from './Filter'
import withTags from '../../hocs/withTags'

export default compose(withTags, withTranslation())(Filter)
