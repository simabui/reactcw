import React, { Component } from 'react';
import Button from '../Button/Button';

const withToggling = WrappedComponent => {
  return class InnerClass extends Component {
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
      return (
        <div>
          <Button
            variant="contained"
            type="button"
            onClick={this.handleToggling}
          >
            toggle
          </Button>
          {isShown ? (
            <img
              src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes.png"
              alt="adidas"
              className="adidas"
            />
          ) : (
            <WrappedComponent {...this.props} logComponent={this.handleClick} />
          )}
        </div>
      );
    }
  };
};

export default withToggling;
