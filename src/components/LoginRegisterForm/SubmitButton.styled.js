/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class SubmitButtonStyled extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={this.props.className}
        type='submit'
        value={this.props.text}/>
    );
  }
}

export const SubmitButton = styled(SubmitButtonStyled)`
  width: 350px;
  border-radius: 8px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  padding: 12px 0;
  background-color: #2f80ed;
  color: #ffffff;
  border: none;
  margin-top: 7px;
  transition: background-color 0.4s ease-in-out;
  :hover{
    background-color: #1b62c2;
  }
`;

SubmitButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
