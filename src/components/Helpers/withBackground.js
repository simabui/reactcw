import React, { Component } from 'react';

const withBackground = WrappedComponent => {
  return class InnerClass extends Component {
    state = {};

    render() {
      return (
        <div className="block-purple">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withBackground;
