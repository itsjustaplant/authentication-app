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
    const userPassword = (status === 200) ? password : '';

    dispatch({
      type: 'REGISTER_USER',
      payload: {
        email: userEmail,
        password: userPassword,
        status: status,
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
    console.log(response.data);
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
      type: 'SET_USER_DATA',
      payload: {
        email: email,
        password: password,
        bio: bio,
        photo: photo,
        phone: phone,
        redirectToUser: flag,
      },
    });
  };
};
