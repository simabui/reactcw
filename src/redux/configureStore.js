import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { sidebarReducer, inputReducer, postsReducer } from './reducer';

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);
// main store
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  input: inputReducer,
  posts: postsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  enhancer,
});

export default store;
