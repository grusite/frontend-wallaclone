import { connect } from 'react-redux';

import { getTags } from '../store/selectors';
import { loadTags } from '../store/actions/actions';

const mapStateToProps = state => ({
  tags: getTags(state)
});

const mapDispatchToProps = {
  loadTags
};

export default connect(mapStateToProps, mapDispatchToProps);
