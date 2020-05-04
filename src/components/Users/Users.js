import React, { Component } from 'react';
import { getRequest } from '../../services/services';
import User from './User/User';
import style from './Users.module.css';

export default class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const { data } = await getRequest();

    this.setState({ users: data });
  };

  render() {
    const { users } = this.state;
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
}
