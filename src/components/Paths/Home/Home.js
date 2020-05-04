import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="users">Show Users</Link>
    </div>
  );
};

export default Home;
