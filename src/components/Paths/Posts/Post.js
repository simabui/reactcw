import React from 'react';

export default function Post({ post }) {
  return (
    <div>
      <h2>
        {post.title} - {post.id}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}
