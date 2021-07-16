/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function LabelStyled(props) {
  return (
    <label className={props.className}>{props.text}</label>
  );
}

export const Label = styled(LabelStyled)`
  color: #4f4f4f;
  font-family: Noto Sans,serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 4px;
`;

LabelStyled.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
