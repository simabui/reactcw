import React, { useEffect } from 'react';
import Post from './Post';
import Pagination from '../../Pagination/PaginationContainer';

export default function Posts({ fetchPosts, posts, loadPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <ul style={{ padding: '0', height: '400px' }}>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <Pagination />
    </>
  );
}
