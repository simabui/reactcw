/* eslint-disable */
import React, { Component } from 'react';
import style from './Button.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Button extends Component {
  state = {};

  render() {
    const {
      variant,
      color,
      disabled,
      disableElevation,
      type,
      isLoading,
      onClick,
      inlineStyle,
    } = this.props;
    const styleBtn = `${style.button} ${style[color]}
     ${disableElevation && style.disableElevation} `;

    return (
      <div className={style[variant]}>
        <button
          className={styleBtn}
          type={type}
          disabled={disabled}
          onClick={onClick}
          style={inlineStyle}
        >
          {isLoading ? (
            <Loader
              type="ThreeDots"
              color="#000"
              height={30}
              width={30}
              visible={isLoading}
              className={style.loader}
            />
          ) : (
            this.props.children
          )}
        </button>
      </div>
    );
  }
}
