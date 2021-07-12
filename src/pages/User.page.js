/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {NavBar} from '../components/NavBar/NavBar.styled';
import {UserTable} from '../components/UserTable/UserTable.styled';


function UserStyled(props) {
  return (
    <div className={props.className}>
      <NavBar/>
      <h1>Personal Info</h1>
      <p>Basic info, like your name and photo</p>
      <UserTable/>
    </div>
  );
}

export const User = styled(UserStyled)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  
  >h1{
    font-family: 'Noto Sans', sans-serif;
    font-size: 36px;
    line-height: 40px;
    padding: 14px 0 10px 0;
    margin: 0;
    text-align: center;
  }
  
  >p{
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

UserStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
