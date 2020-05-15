import React from 'react';
import { Link } from 'react-router-dom';
import withBackground from '../../Helpers/withBackground';
import Button from '../../Button/Button';
import Sidebar from '../../Sidebar/SidebarContainer';
import style from './Home.module.css';

const Home = ({ toggleSidebar }) => {
  return (
    <>
      <Sidebar />
      <Link to="users">Show Users</Link>
      <div className={style.home__button}>
        <Button variant="contained" onClick={toggleSidebar}>
          Toggle menu
        </Button>
      </div>
    </>
  );
};

export default withBackground(Home);
