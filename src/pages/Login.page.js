/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import TweenMax from 'gsap';

import {Form} from '../components/Form/Form.styled';
import {Logo} from '../components/Logo/Logo.styled';
import {Social} from '../components/Logo/Social.styled';
import {useDispatch, useSelector} from 'react-redux';
import {ErrorModal} from '../components/ErrorModal/ErrorModal.styled';

function LoginStyled(props) {
  const modalIsOpen = useSelector((state) => state.user.passwordIsWrong);
  const dispatch = useDispatch();
  const modalHeader = 'Password is wrong';
  const modalText = 'If you forgot your password please send us an email.';

  function closeModal() {
    dispatch({type: 'CLOSE_LOGIN_MODAL'});
  }

  let elementRef = useRef(null);
  let Tween;

  useEffect(() => {
    Tween = TweenMax.to(
        elementRef,
        {
          opacity: 1,
          y: 10,
        },
    );
  }, []);

  return (
    <div
      ref={(element) => {
        elementRef = element;
      }}
      className={props.className}>
      <Logo/>
      <ErrorModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        modalHeader={modalHeader}
        modalText={modalText}
      >
      </ErrorModal>
      <h1>Login</h1>
      <Form text='Login' type='login'/>
      <p id='social_text'>or continue with these socials</p>
      <div>
        <Social icon='Google'/>
        <Social icon='Facebook'/>
        <Social icon='Twitter'/>
        <Social icon='Github'/>
      </div>
      <p id='register_text'>Don`t have any account yet?<Link to='/register'>Register</Link></p>
    </div>
  );
}

export const Login = styled(LoginStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding: 60px 0;
  width: clamp(360px, 60%, 480px);
  opacity: 0;

  h1{
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    color: #333333;
    width: 350px;
    text-align: left;
    padding-bottom: 20px;
  }
  
  p{
    width: 350px;
    text-align: center;
    color: #828282;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
  }
  #social_text{
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #register_text{
    margin-top: 30px;
  }
  
   >div{
    display: flex;
    flex-direction: row;
    width: 240px;
  }
`;

LoginStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
