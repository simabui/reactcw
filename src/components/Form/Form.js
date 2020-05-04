import React, { Component } from 'react';
import Input from '../Input/Input';
// import RadioGroup from './Input/RadioGroup';
import Button from '../Button/Button';
import { sendRequest } from '../../services/services';

const initial = {
  name: '',
  login: '',
  sex: 'male',
  age: '',
  number: '',
  password: '',
};

export default class Form extends Component {
  state = {
    user: {
      name: '',
      login: '',
      sex: 'male',
      age: '',
      number: '',
      password: '',
    },
    isLoading: false,
  };

  handleSubmit = async e => {
    e.preventDefault();
    const err = this.validate(this.state.user);
    const { user } = this.state;

    if (!err) {
      alert('error');
      return;
    }

    this.setState({ isLoading: true });
    try {
      const response = await sendRequest(user);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState(state => {
      return { user: { ...state.user, [name]: value } };
    });
  };

  reset = () => {
    this.setState(state => {
      return { user: { ...initial } };
    });
  };

  validate = values => {
    return Object.values(values).every(value => value.length > 0);
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Input
          type="text"
          value={user.login}
          onChange={this.handleChange}
          name="login"
        >
          Create user name
        </Input>
        <Input
          type="text"
          value={user.name}
          onChange={this.handleChange}
          name="name"
        >
          Create profile name
        </Input>
        <Input
          type="number"
          value={user.age}
          onChange={this.handleChange}
          name="age"
        >
          Specify age
        </Input>
        <Input
          type="number"
          value={user.number}
          onChange={this.handleChange}
          name="number"
        >
          Enter your cell number
        </Input>
        <Input
          type="radio"
          value="male"
          onChange={this.handleChange}
          name="sex"
        >
          Male
        </Input>
        <Input
          type="radio"
          value="female"
          onChange={this.handleChange}
          name="sex"
          checked={user.sex}
        >
          Female
        </Input>
        <Input
          type="text"
          value={user.password}
          onChange={this.handleChange}
          name="password"
          checked={user.sex}
        >
          Create your password
        </Input>
        <Button variant="contained" type="submit" isLoading={isLoading}>
          login
        </Button>
      </form>
    );
  }
}
