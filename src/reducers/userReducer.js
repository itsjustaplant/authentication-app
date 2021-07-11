/* eslint-disable require-jsdoc, max-len */

import Cookies from 'js-cookie';

const initialState = {
  redirectToUser: false,
  loggedIn: false,
  userEmail: '',
  userPassword: '',
  userBio: '',
  userPhotoURL: '',
  userPhone: '',
  userAlreadyExists: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case 'REGISTER_USER': {
      const {status, email, password} = action.payload;
      const flag = (status === 200);

      if (status === 200) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('userEmail', email);
        Cookies.set('userPassword', password);
      } else if (status === 201) {
        Cookies.set('isLoggedIn', 'false');
        Cookies.set('userEmail', email);
        Cookies.set('userPassword', password);
      }

      return {
        ...state,
        redirectToUser: flag,
        loggedIn: flag,
        userEmail: (flag) ? email : '',
        userAlreadyExists: !flag,
      };
    }
    case 'SET_USER_DATA': {
      const {redirectToUser, email, password, bio, phone, photo} = action.payload;

      if (redirectToUser) {
        Cookies.set('isLoggedIn', 'true');
        Cookies.set('userEmail', email);
        Cookies.set('userPassword', password);
      } else {
        Cookies.set('isLoggedIn', 'false');
        Cookies.set('userEmail', '');
        Cookies.set('userPassword', '');
      }

      return {
        ...state,
        loggedIn: redirectToUser,
        redirectToUser: redirectToUser,
        userEmail: email,
        userPassword: password,
        userBio: bio,
        userPhone: phone,
        userPhotoURL: photo,
      };
    }
    case 'CLOSE_MODAL':
      return {
        ...state,
        userAlreadyExists: false,
      };
  }
}
