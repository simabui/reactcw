/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  render() {
    const { phone, onClose } = this.props;

    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <p>{phone}</p>
          <span className={styles.modalClose} onClick={onClose}>
            X
          </span>
        </div>
      </div>
    );
  }
}
