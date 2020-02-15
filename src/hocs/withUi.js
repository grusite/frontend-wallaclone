import { connect } from 'react-redux'

import { getUi } from '../store/selectors'

const mapStateToProps = state => ({
  ui: getUi(state),
})

export default connect(mapStateToProps)
