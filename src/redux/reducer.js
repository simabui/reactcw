import { createReducer } from '@reduxjs/toolkit';
import * as ACTION from './action';

const initialState = {
  isOpen: false,
};

export const sidebarReducer = createReducer(initialState, {
  [ACTION.toggleSidebar]: state => {
    return { isOpen: !state.isOpen };
  },
  [ACTION.closeSidebar]: () => {
    return { isOpen: false };
  },
});

export const inputReducer = createReducer('', {
  [ACTION.getInput]: (state, action) => action.payload,
});

const initialPosts = {
  page: null,
  allPosts: [],
  showedPosts: [],
  limit: 4,
  lastPostIndex: null,
  previousPostIndex: null,
};

export const postsReducer = createReducer(initialPosts, {
  [ACTION.postsSuc]: (state, action) => {
    return {
      ...state,
      allPosts: [...action.payload],
      showedPosts: [...action.payload.slice(0, state.limit)],
    };
  },
  [ACTION.setPage]: (state, action) => {
    return {
      ...state,
      page: action.payload,
    };
  },
  [ACTION.getLastPost]: (state, action) => {
    return {
      ...state,
      lastPostIndex: action.payload + 1,
      previousPostIndex: action.payload + 1 - state.limit,
    };
  },
  [ACTION.nextPosts]: state => {
    return {
      ...state,
      showedPosts: [...state.allPosts.slice(state.lastPostIndex, state.lastPostIndex + state.limit)],
    };
  },
  [ACTION.previousPosts]: state => {
    return {
      ...state,
      showedPosts: [...state.allPosts.slice(state.previousPostIndex - state.limit, state.lastPostIndex - state.limit)],
    };
  },
});
