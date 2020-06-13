import React from 'react';
import { Link } from 'react-router-dom';
import withBackground from '../../Helpers/withBackground';
import Button from '../../Button/Button';
import Sidebar from '../../Sidebar/SidebarContainer';
import style from './Home.module.css';
import Input from '../../Input/Input';
import ModalPortal from '../../Modal/ModalPortal';

const Home = ({ toggleSidebar, getInput, value }) => {
  const handleChange = ({ target: { value } }) => {
    getInput(value);
  };
  return (
    <>
      <Sidebar />
      <Link to="users">Show Users</Link>
      <Link to="posts">Show Posts</Link>
      <Link to="searchposts">Search Posts</Link>
      <div className={style.home__button}>
        <Button variant="contained" onClick={toggleSidebar}>
          Toggle menu
        </Button>
        <Input type="input" value={value} onChange={handleChange} />
      </div>
      <div id="test"></div>
      <ModalPortal>
        <div>
          <h1>TEST</h1>
        </div>
      </ModalPortal>
    </>
  );
};

export default withBackground(Home);
