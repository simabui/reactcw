import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/action';
import Pagination from './Pagination';

const MSTP = state => {
  return {
    page: state.posts.page,
    posts: state.posts.showedPosts,
    allPosts: state.posts.allPosts,
    limit: state.posts.limit,
  };
};

const MDTP = dispatch => {
  return {
    getNext: () => dispatch(ACTIONS.nextPosts()),
    getPrevious: () => dispatch(ACTIONS.previousPosts()),
    changePage: num => dispatch(ACTIONS.setPage(num)),
    getLastPost: num => dispatch(ACTIONS.getLastPost(num)),
  };
};

export default connect(MSTP, MDTP)(Pagination);
