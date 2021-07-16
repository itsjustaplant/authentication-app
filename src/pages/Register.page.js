/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React, {useEffect, useRef} from 'react';
import {LoginRegisterForm} from '../components/LoginRegisterForm/LoginRegisterForm.styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import TweenMax from 'gsap';
import {Logo} from '../components/Logo/Logo.styled';
import {Social} from '../components/Logo/Social.styled';
import {ErrorModal} from '../components/ErrorModal/ErrorModal.styled';
import {useSelector, useDispatch} from 'react-redux';

function RegisterStyled(props) {
  const modalIsOpen = useSelector((state) => state.user.userAlreadyExists);
  const dispatch = useDispatch();
  const modalHeader = 'This email address is already in use';
  const modalText = 'Try another email address to register';

  function closeModal() {
    dispatch({type: 'CLOSE_REGISTER_MODAL'});
  }

  let elementRef = useRef(null);
  let Tween;

  useEffect(() => {
    Tween = TweenMax.to(
        elementRef,
        {
          opacity: 1,
          y: -10,
        },
    );
  }, []);

  return (
    <div
      ref={(element) => {
        elementRef = element;
      }}
      className={props.className}>
      <ErrorModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        modalHeader={modalHeader}
        modalText={modalText}
      >
      </ErrorModal>
      <Logo/>
      <h1>
          Join thousands of learners from around the world.
      </h1>
      <p id='brief_text'>
          Master web development by making real-life projects. There are multiple paths for you to choose.
      </p>
      <LoginRegisterForm text='Start Coding Now' type='register'/>
      <p id='social_text'>or continue with these socials</p>
      <div>
        <Social icon='Google'/>
        <Social icon='Facebook'/>
        <Social icon='Twitter'/>
        <Social icon='Github'/>
      </div>
      <p id='register_text'>You have account?<Link to='/login'>Login</Link></p>
    </div>
  );
}

export const Register = styled(RegisterStyled)`
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
    margin: 0;
  }
  
  p{
    width: 350px;
    color: #828282;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    text-align: center;
  }
  #brief_text{
    margin: 0;
    padding-bottom: 35px;
    text-align: left;
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
  
  @media (max-width: 768px){
    border: none;
  }
  @media (min-width: 769px){
   border: 1px solid #bdbdbd;
  }
`;

RegisterStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
