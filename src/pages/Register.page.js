/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import {Form} from '../components/Form/Form.styled';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import TweenMax from 'gsap';
import {Logo} from '../components/Logo/Logo.styled';
import {Social} from '../components/Logo/Social.styled';

class RegisterStyled extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.Tween = null;
  }

  componentDidMount() {
    this.Tween = TweenMax.to(
        this.element,
        {
          opacity: 1,
          y: -10,
        });
  }

  render() {
    return (
      <div ref={(div) => {
        this.element = div;
      }} className={this.props.className}>
        <Logo/>
        <h1>
          Join thousands of learners from around the world.
        </h1>
        <p id='brief_text'>
          Master web development by making real-life projects. There are multiple paths for you to choose.
        </p>
        <Form text='Start Coding Now' type='register'/>
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
`;

RegisterStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
