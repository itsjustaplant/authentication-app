/* eslint-disable require-jsdoc, max-len */

import Cookies from 'js-cookie';

const initialState = {
  loggedIn: false,
  userAlreadyExists: false,
  passwordIsWrong: false,
  userEmail: '',
  userBio: '',
  userPhotoURL: '',
  userPhone: '',
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case 'SET_USER': {
      const {type, loggedIn, email} = action.payload;

      if (loggedIn) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('userEmail', email);
      } else {
        Cookies.set('isLoggedIn', 'false');
        Cookies.set('userEmail', '');
      }

      if (type === 'REGISTER') {
        return {
          ...state,
          loggedIn: loggedIn,
          userEmail: (loggedIn) ? email : '',
          userAlreadyExists: !loggedIn,
        };
      } else if (type === 'LOGIN') {
        const {email, bio, phone, photo, passwordIsWrong} = action.payload;
        return {
          ...state,
          loggedIn: loggedIn,
          userEmail: email,
          userBio: bio,
          userPhone: phone,
          userPhotoURL: photo,
          passwordIsWrong: passwordIsWrong,
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
  }
}
