import { createAction } from '@reduxjs/toolkit';

export const toggleSidebar = createAction('sidebar/TOGGLE_SIDEBAR');
export const closeSidebar = createAction('sidebar/CLOSE_SIDEBAR');
export const getInput = createAction('input/GET_INPUT');
export const postsStart = createAction('posts/LOAD_START');
export const postsSuc = createAction('posts/LOAD_SUCCESS');
export const setPage = createAction('posts/CHANGE_PAGE');
export const getLastPost = createAction('posts/GET_LAST_INDEX');
export const getPreviousLastPost = createAction('posts/GET_PREVIOUS_LAST_INDEX');
export const nextPosts = createAction('posts/LOAD_NEXT');
export const previousPosts = createAction('posts/LOAD_PREVIOUS');
export const fetchData = () => dispatch => {
  dispatch(postsStart());

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json())
    .then(data => dispatch(postsSuc(data)))
    .catch(err => console.log(err));
};
