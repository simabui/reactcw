import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/action';

const Store = WrappedComponent => {
  return class InnerClass extends Component {
    state = {};

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// redux
const mapStateToProps = state => {
  return {
    isOpen: state.sidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(ACTIONS.toggleSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
