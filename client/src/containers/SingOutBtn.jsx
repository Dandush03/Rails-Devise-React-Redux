import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { signOut } from '../actions/usersAction';

class SignOutBtn extends Component {
  constructor(props) {
    super(props);
    this.test = '';
  }

  render() {
    const { props } = this;
    return (
      <>
        <button type="button" className="getThings" onClick={() => props.signOut()}>signOut</button>
      </>
    );
  }
}

SignOutBtn.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  currentUser: (state) => state.currentUser,
});

const mapDispatchToProps = { signOut };

export default connect(structeredSelector, mapDispatchToProps)(SignOutBtn);
