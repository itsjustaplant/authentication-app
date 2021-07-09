/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {ModalButton} from './ModalButton.styled';
import {ModalText} from './ModalText.styled';

class ErrorModalStyled extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        className={this.props.className}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        ariaHideApp={this.props.ariaHideApp}
      >
        <ModalText/>
        <ModalButton onClick={this.props.onRequestClose}/>
      </Modal>
    );
  }
}

export const ErrorModal = styled(ErrorModalStyled)`
  width: 280px;
  height: 180px;
  justify-self: center;
  align-self: center;
  background-color: yellow;
`;

ErrorModalStyled.propTypes = {
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  ariaHideApp: PropTypes.bool.isRequired,
};
