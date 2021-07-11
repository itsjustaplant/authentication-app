/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {ModalButton} from './ModalButton.styled';
import {ModalHeader} from './ModalHeader.styled';
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
        <ModalHeader text={this.props.modalHeader}/>
        <ModalText text={this.props.modalText}/>
        <ModalButton onClick={this.props.onRequestClose}/>
      </Modal>
    );
  }
}

export const ErrorModal = styled(ErrorModalStyled)`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #fafafa;
  border: 2px solid #828282;
  border-radius: 8px;
  padding: 40px 20px;
  filter: drop-shadow(5px 5px 1px rgba(51, 51, 51, 0.3));
`;

ErrorModalStyled.propTypes = {
  className: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  ariaHideApp: PropTypes.bool.isRequired,
  modalHeader: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
};
