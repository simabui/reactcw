import { connect } from 'react-redux';
import Users from './Users';

const MSTP = state => ({
  value: state.input,
});

export default connect(MSTP)(Users);
