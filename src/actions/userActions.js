/* eslint-disable require-jsdoc, max-len */
import Axios from 'axios';

export const registerUser = (body) => {
  return async (dispatch, getState) => {
    const {email, password} = body;
    const response = await Axios.post(
        'http://localhost:3001/register',
        {
          email: email,
          password: password,
        });
    const status = response.status;
    const userEmail = (status === 200) ? email : '';
    dispatch({
      type: 'REGISTER_USER',
      payload: {
        email: userEmail,
        status: status,
      },
    });
  };
};
