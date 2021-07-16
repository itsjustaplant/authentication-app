/* eslint-disable require-jsdoc, max-len */
import Axios from 'axios';
import Cookies from 'js-cookie';

export const registerUser = (body) => {
  return async (dispatch, getState) => {
    const {email, password} = body;
    const response = await Axios.post(
        'http://localhost:3001/register',
        {
          email: email,
          password: password,
        });
    console.log(response.data);
    const {status, accessToken} = response.data;
    const userLoggedIn = (status === 200);
    const userEmail = (userLoggedIn) ? email : '';

    dispatch({
      type: 'SET_USER',
      payload: {
        type: 'REGISTER',
        email: userEmail,
        loggedIn: userLoggedIn,
        token: accessToken,
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
    const {status, token} = response.data;

    const flag = (status === 200);
    flag ? Cookies.set('accessToken', token) : Cookies.set('accessToken', '');

    dispatch({
      type: 'SET_USER',
      payload: {
        type: 'LOGIN',
        email: email,
        loggedIn: flag,
      },
    });
  };
};

export const getUser = (body) => {
  const {email, token} = body;
  return async (dispatch, getState) => {
    const response = await Axios.post(
        'http://localhost:3001/user',
        {
          token: token,
          email: email,
        },
    );
    const {status, photo, name, bio, phone} = response.data;

    dispatch({
      type: 'SET_USER',
      payload: {
        type: 'SET',
        status: status,
        photo: photo,
        phone: phone,
        name: name,
        bio: bio,
      },
    });
  };
};

export const editUser = (body) => {
  const {data, token, email} = body;
  return async (dispatch, getState) => {
    const response = await Axios.post(
        'http://localhost:3001/edit',
        {
          data: data,
          token: token,
          email: email,
        },
    );
    console.log(response.data);
  };
};
