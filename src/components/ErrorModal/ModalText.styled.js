/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ModalTextStyled extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p className={this.props.className}>{this.props.text}</p>
    );
  }
}
export const ModalText = styled(ModalTextStyled)`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 20px;
`;

ModalTextStyled.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
