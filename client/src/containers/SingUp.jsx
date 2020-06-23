import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { signUp } from '../actions/usersAction';

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    const { props } = this;
    return (
      <>
        <button type="button" className="getThings" onClick={() => props.signUp()}>Create</button>
      </>
    );
  }
}

SingIn.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  currentUser: (state) => state.currentUser,
});

const mapDispatchToProps = { signUp };

export default connect(structeredSelector, mapDispatchToProps)(SingIn);
