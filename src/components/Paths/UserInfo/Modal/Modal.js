/* eslint-disable */
import React, { Component } from 'react';
import styles from './Modal.module.css';
import Button from '../../../Button/Button';
export default class Modal extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history, location } = this.props;
    const input = e.target.elements.input.value;
    const { input: name } = this.state;

    this.setState({ input });
    this.props.onSubmit(name);

    if (location.state) {
      history.push(location.state.from);
      return;
    } else {
      history.push('/users');
    }
  };

  componentDidMount() {
    if (this.props.editValue) {
      this.setState({ input: this.props.editValue });
    }
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleReturn = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push('/users');
  };
  render() {
    const { input } = this.state;

    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <form onSubmit={this.handleSubmit}>
            <input value={input} onChange={this.handleChange} name="input" />
            <Button type="submit">Edit</Button>
          </form>
          <span className={styles.modalClose} onClick={this.handleReturn}>
            X
          </span>
        </div>
      </div>
    );
  }
}
