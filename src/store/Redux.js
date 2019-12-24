import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthCreators } from './ducks/auth';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ...AuthCreators,
  },
  dispatch,
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
