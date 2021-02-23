/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import themes from '../helpers/theme';

const store = createContext();
const { Provider } = store;

// create Provider Component with init state
const StateProvider = ({ children }) => {
  // create one of state property
  // we can make multiple useReducer
  const [theme, dispatchTheme] = useReducer((state, action) => {
    switch (action) {
      case 'light theme':
        return { ...themes.light };
      case 'dark theme':
        return { ...themes.dark };
      default:
        return state;
    }
    // set default state
  }, themes.dark);

  return <Provider value={{ theme, dispatchTheme }}>{children}</Provider>;
};

export { store, StateProvider };
