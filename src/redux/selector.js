import { createSelector } from 'reselect';

export const filtered = state => state.posts.showedPosts;

export const getFilteredPosts = (data, input) => {
  return data.filter(post => post.title.includes(input));
};
export const getFilteredPostsMemoized = createSelector(filtered, data => input =>
  data.filter(post => post.title.includes(input)),
);
