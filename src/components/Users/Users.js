/* eslint-disable */
import React, { Component } from 'react';
import { getRequest } from '../../services/services';
import User from './User/User';
import style from './Users.module.css';
import Toggler from '../Helpers/Toggler';
import Button from '../Button/Button';

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const { data } = await getRequest();

    this.setState({ users: data });
  };

  render() {
    const { users } = this.state;
    const { logComponent } = this.props;
    return (
      <>
        <Toggler>
          {({ isShown, toggling }) => (
            <>
              <Button variant="contained" type="button" onClick={toggling}>
                toggle
              </Button>
              {isShown ? (
                <img
                  src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes.png"
                  alt="adidas"
                  className="adidas"
                />
              ) : (
                <ul className={style.users} onClick={logComponent}>
                  {users.map(user => (
                    <User user={user} key={user.id} />
                  ))}
                </ul>
              )}
            </>
          )}
        </Toggler>
      </>
    );
  }
}

export default Users;
