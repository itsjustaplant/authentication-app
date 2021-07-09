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
      <h1 className={this.props.className}>Try another email address</h1>
    );
  }
}

export const ModalText = styled(ModalTextStyled)`

`;

ModalTextStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
