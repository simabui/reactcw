import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Home from './Home';

// redux
const mapStateToProps = state => {
  return {
    isOpen: state.sidebar.isOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(ACTIONS.toggleSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
