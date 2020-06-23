import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { signIn, signUp } from '../actions/usersAction';

import SignUp from '../containers/SingUp'

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { state: { email, password }, props: { signIn, currentUser } } = this;
    if (email === '' || password === '') {
      this.setState({ error: "email and password can't be black" });
      return;
    }
    signIn(email, password);
    if (currentUser.success) {
      this.setState({ email: '', password: '', error: '' });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { state: { error }, props: { currentUser } } = this;
    return (
      <>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        {currentUser.success ? <Redirect to="/" /> : null}
        <div>
          <label htmlFor="email">
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log In</button>
          <button type="submit" onClick={() => window.location.replace('/')}>Cancel</button>
        </div>
        {error !== '' ? <div>{error}</div> : null}
      </form>
        </>
    );
  }
}

SingIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.bool, PropTypes.string],
  )).isRequired,
};

const structeredSelector = createStructuredSelector({
  currentUser: (state) => state.currentUser,
});

const mapDispatchToProps = { signIn };

export default connect(structeredSelector, mapDispatchToProps)(SingIn);
