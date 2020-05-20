import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Posts from './Posts';

const filtered = state => state.posts.slice(0, 21);

const MSTP = state => {
  return {
    posts: filtered(state),
  };
};

const MDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(ACTIONS.fetchData()),
    loadPosts: index => dispatch(ACTIONS.loadPosts(index)),
  };
};

export default connect(MSTP, MDTP)(Posts);
