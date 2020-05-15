import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/action';
import Sidebar from './Sidebar';

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(ACTIONS.toggleSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(Sidebar);
