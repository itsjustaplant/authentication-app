/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function EditButtonStyled(props) {
  return (
    <button className={props.className}>Edit</button>
  );
}

export const EditButton = styled(EditButtonStyled)`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 16px;
  padding: 8px 32px;
  background-color: transparent;
  color: #828282;
  border: 1px solid #828282;
  border-radius: 12px;
`;

EditButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
