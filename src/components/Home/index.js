import { compose } from '../../utils/compose';
import Home from './Home';
import withAdverts from '../../hocs/withAdverts';
import withSession from '../../hocs/withSession';
import withTags from '../../hocs/withTags';

export default compose(withAdverts, withSession, withTags)(Home);
