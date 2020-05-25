import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Posts from './Posts';

// const filtered = state => state.posts.allPosts.slice(0, 6);
const filtered = state => state.posts.showedPosts;

const MSTP = state => {
  return {
    posts: filtered(state),
  };
};

const MDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(ACTIONS.fetchData()),
  };
};

export default connect(MSTP, MDTP)(Posts);
