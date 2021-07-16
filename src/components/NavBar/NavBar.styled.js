/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Logo} from '../Logo/Logo.styled';
import {ExitButton} from './ExitButton.styled';

function NavBarStyled(props) {
  return (
    <div className={props.className}>
      <Logo/>
      <ExitButton/>
    </div>
  );
}

export const NavBar = styled(NavBarStyled)`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  @media (max-width: 768px){
    padding: 0 20px;
    width: calc(100vw - 40px);
  }
  @media (min-width: 769px){
    padding: 0 50px;
    width: calc(100vw - 100px);
  }
  
  img{
    padding: 0 !important;
  }
`;

NavBarStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
