import { createAction } from '@reduxjs/toolkit';

export const toggleSidebar = createAction('TOGGLE_SIDEBAR');
export const closeSidebar = createAction('CLOSE_SIDEBAR');
export const getInput = createAction('GET_INPUT');
export const postsSuc = createAction('POSTS_SUCCESS');
export const fetchData = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r => r.json())
    .then(data => dispatch(postsSuc(data)));
};

export const loadPosts = createAction('POSTS_LOAD');
