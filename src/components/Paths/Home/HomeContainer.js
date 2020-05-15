import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Home from './Home';

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(ACTIONS.toggleSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
