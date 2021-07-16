/* eslint-disable require-jsdoc, max-len */

import Cookies from 'js-cookie';

const initialState = {
  loggedIn: false,
  userAlreadyExists: false,
  passwordIsWrong: false,
  userBio: '',
  userPhotoURL: '',
  userPhone: '',
  userName: '',
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case 'SET_USER': {
      const {type, token, loggedIn, email} = action.payload;

      if (type === 'REGISTER') {
        Cookies.set('userEmail', loggedIn ? email : '');
        Cookies.set('accessToken', token);

        return {
          ...state,
          loggedIn: loggedIn,
          userAlreadyExists: !loggedIn,
        };
      } else if (type === 'LOGIN') {
        Cookies.set('userEmail', loggedIn ? email : '');
        return {
          ...state,
          loggedIn: loggedIn,
          passwordIsWrong: !loggedIn,
        };
      } else if (type === 'SET') {
        const {photo, name, bio, phone} = action.payload;
        return {
          ...state,
          userPhotoURL: photo,
          userName: name,
          userBio: bio,
          userPhone: phone,
        };
      }
      break;
    }
    case 'CLOSE_REGISTER_MODAL':
      return {
        ...state,
        userAlreadyExists: false,
      };
    case 'CLOSE_LOGIN_MODAL':
      return {
        ...state,
        passwordIsWrong: false,
      };
    case 'EXIT':
      Cookies.set('userEmail', '');
      Cookies.set('accessToken', '');

      return {
        loggedIn: false,
        userAlreadyExists: false,
        passwordIsWrong: false,
        userBio: '',
        userPhotoURL: '',
        userPhone: '',
        userName: '',
      };
  }
}
