import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer, inputReducer } from './reducer';
// main store
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  input: inputReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
