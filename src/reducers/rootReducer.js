/* eslint-disable require-jsdoc, max-len */

import {combineReducers} from 'redux';

import formReducer from './formReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
});
export default rootReducer;
