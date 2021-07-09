/* eslint-disable require-jsdoc, max-len */

const initialState = {
  redirectToUser: false,
  loggedIn: false,
  userEmail: '',
  userAlreadyExists: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case 'REGISTER_USER':
      const {status, email} = action.payload;
      const flag = status === 200;

      if (status === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
      } else if (status === 201) {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userEmail', '');
      }

      return {
        ...state,
        redirectToUser: flag,
        loggedIn: flag,
        userEmail: (flag) ? email : '',
        userAlreadyExists: !flag,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        userAlreadyExists: false,
      };
  }
}
