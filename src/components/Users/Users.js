import React, { useState, useEffect } from 'react';
import { getRequest } from '../../services/services';
import User from './User/User';
import style from './Users.module.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await getRequest();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <>
      <ul className={style.users}>
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </>
  );
}

export default Users;
