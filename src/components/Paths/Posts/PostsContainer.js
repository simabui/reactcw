import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/action';
import Posts from './Posts';
import { filtered, getFilteredPosts, getFilteredPostsMemoized } from '../../../redux/selector';

const MSTP = (state, props) => {
  const { title } = props;
  const posts = filtered(state);
  const filteredPosts = getFilteredPosts(posts, title);
  // reselect
  const titleFilter = getFilteredPostsMemoized(state);
  const filteredTitle = titleFilter(title);
  return {
    filteredPosts: filteredTitle,
  };
};

const MDTP = dispatch => {
  return {
    fetchPosts: () => dispatch(ACTIONS.fetchData()),
  };
};

export default connect(MSTP, MDTP)(Posts);
