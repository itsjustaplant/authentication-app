/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';


import {Input} from './Input.styled';
import {SubmitButton} from './SubmitButton.styled';
import {registerUser, loginUser} from '../../actions/userActions';
import {checkPasswordLength, checkPasswordContainsSpace, checkEmailValid} from '../../helpers';


export function LoginRegisterFormStyled(props) {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const emailErrorText = 'Email is not valid';
  const passwordErrorText = 'Password is not valid';
  const emailErrorOpacity = useSelector((state) => state.form.emailErrorOpacity);
  const passwordErrorOpacity = useSelector((state) => state.form.passwordErrorOpacity);

  const checkAndSubmit = (data) => {
    const emailDispatchType = 'SET_EMAIL_ERROR';
    const passwordDispatchType = 'SET_PASSWORD_ERROR';
    const {email, password} = data;

    const isEmailValid = checkEmailValid(email);
    const isPasswordValid = checkPasswordContainsSpace(password) && checkPasswordLength(password);
    const isFormValid = isEmailValid && isPasswordValid;

    const emailErrorOpacity = (isEmailValid) ? 0 : 100;
    const passwordErrorOpacity = (isPasswordValid) ? 0 : 100;

    dispatch({type: emailDispatchType, payload: {error: emailErrorText, opacity: emailErrorOpacity}});
    dispatch({type: passwordDispatchType, payload: {eror: passwordErrorText, opacity: passwordErrorOpacity}});

    if (isFormValid) {
      if (props.type === 'register') {
        dispatch(registerUser(data));
      } else {
        dispatch(loginUser(data));
      }
    }
  };
  const onSubmit = (data) => checkAndSubmit(data);

  const component =
        <form className={props.className} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={{...register('email' )}}
            placeholder='Email' icon='email'
            error={emailErrorText}
            opacity={emailErrorOpacity}
          />
          <Input
            register={{...register('password')}}
            placeholder='Password' icon='lock'
            error={passwordErrorText}
            opacity={passwordErrorOpacity}
          />
          <SubmitButton text={props.text}/>
        </form>;

  return (
    <>
      {component}
    </>
  );
}

export const LoginRegisterForm = styled(LoginRegisterFormStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  gap: 24px;
`;

LoginRegisterFormStyled.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
