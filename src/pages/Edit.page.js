/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React from 'react';
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
};

export const Edit = styled(EditStyled)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding: 60px 0;
`;

EditStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
