import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import SignInBtn from '../components/SignInBtn';
import SignOutBtn from './SingOutBtn';

function Header(props) {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <header>
      {!currentUser.success ? <SignInBtn /> : <SignOutBtn />}
    </header>
  );
}

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.bool, PropTypes.string],
  )).isRequired,
};

const structeredSelector = createStructuredSelector({
  currentUser: (state) => state.currentUser,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Header);
