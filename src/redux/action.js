export const TYPE = {
  toggle: 'TOGGLE_SIDEBAR',
};

export function toggleSidebar() {
  return {
    type: TYPE.toggle,
  };
}
