/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ModalHeaderStyled extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className={this.props.className}>This mail address is already in use</h1>
    );
  }
}

export const ModalHeader = styled(ModalHeaderStyled)`
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  line-height: 28px;
  padding: 0;
  margin: 0;
`;

ModalHeaderStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
