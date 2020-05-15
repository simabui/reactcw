import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import sidebarReducer from './reducer';

// main store
const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

// create store
function configureStore(reducers) {
  return createStore(reducers, devToolsEnhancer());
}

const store = configureStore(rootReducer);

export default store;
