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
    const userLoggedIn = (status === 200);
    const userEmail = (userLoggedIn) ? email : '';

    dispatch({
      type: 'SET_USER',
      payload: {
        type: 'REGISTER',
        email: userEmail,
        loggedIn: userLoggedIn,
      },
    });
  };
};

export const loginUser = (body) => {
  return async (dispatch, getState) => {
    const {email, password} = body;
    const response = await Axios.post(
        'http://localhost:3001/login',
        {
          email: email,
          password: password,
        });

    const {user, status} = response.data;

    let flag; let bio; let phone; let photo;

    if (status === 200) {
      bio = user.bio;
      phone = user.phone;
      photo = user.photo;
      flag = true;
    } else {
      bio = '';
      phone = '';
      photo = '';
      flag = false;
    }

    dispatch({
      type: 'SET_USER',
      payload: {
        type: 'LOGIN',
        email: email,
        bio: bio,
        photo: photo,
        phone: phone,
        passwordIsWrong: !flag,
        loggedIn: flag,
      },
    });
  };
};
