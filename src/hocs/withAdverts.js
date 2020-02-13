import { connect } from 'react-redux';

import {
  getAdverts,
  getAdvert,
  getUpdatedAdvert,
  getCreatedAdvert,
  getUi
} from '../store/selectors';
import {
  fetchAdverts,
  fetchAdvertById,
  updateAdvert,
  createAdvert
} from '../store/actions';

const mapStateToProps = state => ({
  adverts: getAdverts(state),
  advert: getAdvert(state),
  advertUpdated: getUpdatedAdvert(state),
  advertCreated: getCreatedAdvert(state),
  ui: getUi(state)
});

const mapDispatchToProps = {
  fetchAdverts,
  fetchAdvertById,
  updateAdvert,
  createAdvert
};

export default connect(mapStateToProps, mapDispatchToProps);
