import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from 'react-loader-spinner';
import Home from './Paths/Home/Home';
import NotFound from './Paths/NotFound/NotFound';

const asyncUserInfo = Loadable({
  loader: () => import('./Paths/UserInfo/Userinfo'),
  loading() {
    return <Loader type="ThreeDots" color="#000" height={30} width={30} />;
  },
  delay: 300,
});
const asyncUsers = Loadable({
  loader: () => import('./Users/Users'),
  loading() {
    return <Loader type="ThreeDots" color="#000" height={30} width={30} />;
  },
  delay: 300,
});

export default class App extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={asyncUsers} />
          <Route path="/users/:id" component={asyncUserInfo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
