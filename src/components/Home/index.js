import { compose } from '../../utils/compose'
import Home from './Home'
import withAdverts from '../../hocs/withAdverts'
import withSession from '../../hocs/withSession'
import withTags from '../../hocs/withTags'
import withUi from '../../hocs/withUi'

export default compose(withAdverts, withSession, withTags, withUi)(Home)
