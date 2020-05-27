import React, { useState } from 'react';
import Input from '../../Input/Input';
import Posts from '../Posts/PostsContainer';
import css from './SearchPosts.module.css';

const SearchPosts = () => {
  const [input, setInput] = useState('');

  const handleInput = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div>
      <Input type="text" name="posts" onChange={handleInput} value={input} classname={css.input} />
      <Posts title={input} />
    </div>
  );
};

export default SearchPosts;
