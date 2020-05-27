import React, { Component, Fragment } from 'react';

export default class Input extends Component {
  state = {};

  render() {
    const { children, type, value, onChange, name, classname } = this.props;
    return (
      <Fragment>
        <label>
          {children}
          <input type={type} value={value} onChange={onChange} name={name} className={classname} />
        </label>
      </Fragment>
    );
  }
}
