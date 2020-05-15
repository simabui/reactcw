export const TYPE = {
  toggle: 'TOGGLE_SIDEBAR',
  close: 'CLOSE_SIDEBAR',
};

export function toggleSidebar() {
  return {
    type: TYPE.toggle,
  };
}

export function closeSidebar() {
  return {
    type: TYPE.close,
  };
}
