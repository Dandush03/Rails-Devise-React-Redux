import * as ActionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return action.json;
    case ActionTypes.SIGN_OUT:
      return {};
    case ActionTypes.SIGN_UP:
      return action.json;
    default:
      return state;
  }
};
