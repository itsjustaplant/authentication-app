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
      <div className='modal-button-container'>
        <button className={this.props.className} onClick={this.props.onClick}>Close</button>
      </div>
    );
  }
}

export const ModalButton = styled(ModalButtonStyled)`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 20px;
  border: 1px solid rgba(31, 31, 31, 0.4);
  margin-left: auto;
  margin-top: 10px;
  border-radius: 8px;
`;

ModalButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
