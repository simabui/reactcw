import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/action';
import Sidebar from './Sidebar';

const MSTP = state => {
  return {
    isOpen: state.sidebar.isOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(ACTIONS.closeSidebar()),
  };
};

export default connect(MSTP, mapDispatchToProps)(Sidebar);
