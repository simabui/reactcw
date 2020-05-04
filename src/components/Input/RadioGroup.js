import React, { Component } from 'react';

export default class RadioGroup extends Component {
  state = {};

  render() {
    const { children: input } = this.props;
    return (
      <>
        <label>{input}</label>
      </>
    );
  }
}
