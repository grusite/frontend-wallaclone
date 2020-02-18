import { connect } from 'react-redux';

import { getAdverts, getAdvert } from '../store/selectors';
import {
  fetchAdverts,
  fetchAdvertById,
  updateAdvert,
  createAdvert
} from '../store/actions';

const mapStateToProps = (state, ownProps) => ({
  adverts: getAdverts(state),
  advert: getAdvert(state)(ownProps.match.params.id)
});

const mapDispatchToProps = {
  fetchAdverts,
  fetchAdvertById,
  updateAdvert,
  createAdvert
};

export default connect(mapStateToProps, mapDispatchToProps);
