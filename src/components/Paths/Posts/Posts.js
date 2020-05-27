import React, { useEffect } from 'react';
import Post from './Post';
import Pagination from '../../Pagination/PaginationContainer';

export default function Posts({ fetchPosts, filteredPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <ul style={{ paddingBottom: '10px', height: 'auto' }}>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <Pagination />
    </>
  );
}
