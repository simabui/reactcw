import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './Sidebar.module.css';
import slideTransition from '../../styles/slide.module.css';

export default function Sidebar({ isOpen, close }) {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={slideTransition}
      unmountOnExit
    >
      <div className={style.sidebar}>
        <h2>test</h2>
        <span className={style.sidebarClose} onClick={close}>
          x
        </span>
      </div>
    </CSSTransition>
  );
}
