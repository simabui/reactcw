import { TYPE } from './action';

function sidebarReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case TYPE.toggle: {
      return { isOpen: !state.isOpen };
    }

    case TYPE.close: {
      return { isOpen: false };
    }
    default:
      return state;
  }
}

export default sidebarReducer;
