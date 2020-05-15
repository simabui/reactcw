import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import withBackground from '../../Helpers/withBackground';
import Button from '../../Button/Button';
import Sidebar from '../../Sidebar/SidebarContainer';
import style from './Home.module.css';
import slideTransition from '../../../styles/slide.module.css';

const Home = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={slideTransition}
        unmountOnExit
      >
        <Sidebar />
      </CSSTransition>
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
