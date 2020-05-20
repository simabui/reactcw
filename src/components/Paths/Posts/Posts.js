import React, { useEffect, useState } from 'react';
import Post from './Post';
import Button from '../../Button/Button';

export default function Posts({ fetchPosts, posts, loadPosts }) {
  const [isdisabled, setDisable] = useState(false);
  useEffect(() => {
    fetchPosts();
    if (posts.some(post => post.id === '1')) {
      console.log(posts);
      setDisable(true);
    } else {
      console.log('no');
    }
  }, []);

  const lastPost = posts.length - 1;
  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
      <Button
        variant="contained"
        onClick={() => loadPosts(lastPost)}
        disabled={isdisabled}
      >
        Load Posts
      </Button>
    </>
  );
}
