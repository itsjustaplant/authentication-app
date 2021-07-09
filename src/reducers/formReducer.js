/* eslint-disable require-jsdoc, max-len */

const initialState = {
  emailError: 'yes',
  emailErrorOpacity: 0,
  passwordError: 'yes',
  passwordErrorOpacity: 0,
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
    case 'SET_EMAIL_ERROR':
      return {
        ...state,
        emailError: action.payload.error,
        emailErrorOpacity: action.payload.opacity,
      };
    case 'SET_PASSWORD_ERROR':
      return {
        ...state,
        passwordError: action.payload.error,
        passwordErrorOpacity: action.payload.opacity,
      };
  }
}
