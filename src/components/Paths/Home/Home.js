import React from 'react';
import { Link } from 'react-router-dom';
import withBackground from '../../Helpers/withBackground';

const Home = () => {
  return (
    <>
      <Link to="users">Show Users</Link>
    </>
  );
};

export default withBackground(Home);
