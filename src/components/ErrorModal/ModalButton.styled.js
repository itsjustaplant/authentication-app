/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ModalButtonStyled extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className={this.props.className} onClick={this.props.onClick}>Close</button>
      </div>
    );
  }
}

export const ModalButton = styled(ModalButtonStyled)`

`;

ModalButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
