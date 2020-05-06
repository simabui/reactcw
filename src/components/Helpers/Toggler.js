import React, { Component } from 'react';

export default class Toggler extends Component {
  state = {
    isShown: false,
  };

  handleToggling = () => {
    this.setState(state => {
      return {
        isShown: !state.isShown,
      };
    });
  };

  render() {
    const { isShown } = this.state;

    return this.props.children({
      isShown,
      toggling: this.handleToggling,
    });
  }
}
