/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class TexAreaStyled extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        className={this.props.className}
        rows={this.props.row}
        placeholder={this.props.placeholder}
        {...this.props.register}
      />
    );
  }
}

export const TexArea = styled(TexAreaStyled)`
  padding: 16px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
  resize: none;
  outline: none;
  transition: border-color 0.4s ease-in-out;
  margin-bottom: 30px;
  max-width: 60%;
  :focus{
    border-color: #2f80ed;
  }
  
  ::placeholder{
    color: #bdbdbd;
    font-family: Noto Sans,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 13px;
  }
`;

TexAreaStyled.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.any.isRequired,
};
