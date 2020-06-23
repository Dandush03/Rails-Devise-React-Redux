import axios from 'axios';

import * as ActionTypes from './actionTypes';

function signInSuccess(json) {
  return {
    type: ActionTypes.SIGN_IN,
    json,
  };
}

function signOutSuccess() {
  return {
    type: ActionTypes.SIGN_OUT,
  };
}


function signUp() {
  const user = {
    email: 'dandush@outlook.com',
    password: '123123',
    password_confirmation: '123123',
  };
  axios.post('http://127.0.0.1:3001/api/users', { user })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error.response));
}


function signIn(user, password) {
  /* const user = {
    user,
    password,
  }; */
  //const token = document.querySelector('[name=csrf-token]').content;
  return (dispatch) => {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = 'X-CSRFToken';
    axios.post('http://localhost:3001/api/users/sign_in', { user, password })
      .then((json) => dispatch(signInSuccess(json.data)))
      .catch((error) => console.log(error.response));
  };
}

function signOut() {
  //const token = document.querySelector('[name=csrf-token]').content;
  return (dispatch) => {
    //axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    axios.delete('/api/users/sign_out')
      .then(() => dispatch(signOutSuccess()))
      .catch((error) => console.log(error.response));
  };
}

export { signIn, signUp, signOut };
