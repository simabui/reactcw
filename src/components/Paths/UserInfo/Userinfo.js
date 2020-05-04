/* eslint-disable */
import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, NavLink, Switch, Link } from 'react-router-dom';
import { getUserRequest } from '../../../services/services';
import Button from '../../Button/Button';
import styles from './Userinfo.module.css';
import Modal from './Modal/Modal';

const name = React.createRef();

const asyncModal = Loadable({
  loader: () => import('./Modal/Modal'),
  loading() {
    return <div>Loading</div>;
  },
  delay: 300,
});

export default class Userinfo extends Component {
  state = {
    user: {},
    editedName: '',
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const response = await getUserRequest(id);
    this.setState({ user: response.data });
  }

  componentDidUpdate(props, state) {
    const { editedName } = this.state;
    if (state.editedName !== editedName) {
      name.current.innerHTML = editedName;
    }
  }

  handleReturn = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.push(location.state.from);
      return;
    }
  };

  handleEdit = name => {
    this.setState({ editedName: name });
  };

  render() {
    const { user } = this.state;
    const { match, location } = this.props;
    return (
      <>
        {user && (
          <div>
            <h1 ref={name}>{user.name}</h1>
            <p>{user.phone}</p>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <div className={styles.buttonBlock}>
              <Button
                variant="contained"
                type="button"
                onClick={this.handleReturn}
              >
                Go Back
              </Button>
              <Link
                to={{
                  pathname: `${match.url}/edit`,
                  // custom state
                  state: { from: location },
                }}
              >
                <Button
                  variant="contained"
                  type="button"
                  onClick={this.handleModal}
                >
                  EDIT
                </Button>
              </Link>
            </div>
            <Switch>
              <Route
                exact
                path={`${match.url}/edit`}
                render={props => (
                  <Modal
                    {...props}
                    onSubmit={this.handleEdit}
                    editValue={name.current.innerHTML}
                  />
                )}
              />
            </Switch>
          </div>
        )}
      </>
    );
  }
}
