/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {NavBar} from '../components/NavBar/NavBar.styled';
import {EditFrom} from '../components/EditForm/EditForm.styled';

function EditStyled(props) {
  return (
    <div className={props.className}>
      <NavBar/>
      <EditFrom/>
    </div>
  );
}

export const Edit = styled(EditStyled)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-content: center;
  align-items: center;
`;

EditStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
