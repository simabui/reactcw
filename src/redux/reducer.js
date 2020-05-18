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
