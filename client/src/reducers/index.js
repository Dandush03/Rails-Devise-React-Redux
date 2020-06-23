import { combineReducers } from 'redux';
import UsersReducer from './userReducer';

export default combineReducers({
  currentUser: UsersReducer,
});
