import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Home from './Home';

const MSTP = state => ({
  value: state.input,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(ACTIONS.toggleSidebar()),
    getInput: value => dispatch(ACTIONS.getInput(value)),
  };
};

export default connect(MSTP, mapDispatchToProps)(Home);
