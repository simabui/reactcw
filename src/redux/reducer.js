import { TYPE } from './action';

function sidebarReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case TYPE.toggle: {
      return { isOpen: !state.isOpen };
    }
    default:
      return state;
  }
}

export default sidebarReducer;
