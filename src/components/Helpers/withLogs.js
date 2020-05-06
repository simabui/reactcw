import React, { Component } from 'react';

const withLogs = WrappedComponent => {
  return class InnerClass extends Component {
    state = {};

    componentDidMount() {
      console.log(`WithLog ouput - ${WrappedComponent.name}`);
    }

    handleClick = () => {
      console.log(`WithLog ouput  - ${WrappedComponent.name}`);
    };

    render() {
      return (
        <WrappedComponent {...this.props} logComponent={this.handleClick} />
      );
    }
  };
};

export default withLogs;
