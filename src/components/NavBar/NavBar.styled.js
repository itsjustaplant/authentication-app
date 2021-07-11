/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Logo} from '../Logo/Logo.styled';

function NavBarStyled(props) {
  return (
    <div className={props.className}>
      <Logo/>
    </div>
  );
}

export const NavBar = styled(NavBarStyled)`
  width: calc(100vw - 100px);
  height: 80px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 0 50px;
  
  img{
    padding: 0 !important;
  }
`;

NavBarStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
