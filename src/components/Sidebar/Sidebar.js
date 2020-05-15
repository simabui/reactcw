import React from 'react';
import style from './Sidebar.module.css';

export default function Sidebar({ toggleSidebar }) {
  return (
    <div className={style.sidebar}>
      <h2>test</h2>
      <span className={style.sidebarClose} onClick={toggleSidebar}>
        x
      </span>
    </div>
  );
}
