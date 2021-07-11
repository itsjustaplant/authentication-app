/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Icon} from './Icon.styled';

class InputStyled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }
  handleFocus() {
    this.setState({onFocus: true});
  }
  handleFocusOut() {
    this.setState({onFocus: false});
  }
  render() {
    return (
      <div className={this.props.className}>
        <Icon icon={this.props.icon} onfocus={this.state.onFocus}/>
        <input {...this.props.register} onFocus={this.handleFocus} onBlur={this.handleFocusOut} placeholder={this.props.placeholder}/>
        <span className='error' style={{opacity: this.props.opacity}}>{this.props.error}</span>
      </div>
    );
  }
}

export const Input = styled(InputStyled) `
  border: 1px solid #bdbdbd;
  padding: 12px;
  display: flex;
  border-radius: 8px;
  transition: border-color 0.4s ease-in-out;
  width: 324px;
  
  input{
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
    line-height: 16px;
    height: 20px;
    border: none;
    outline: none;
    padding: 0;
    color: #333333;
    width: calc(100% - 52px);
  }
  
  input::placeholder{
    font-family: 'Noto Sans', sans-serif;
    color: #828282;
  }
  
  :focus-within{
    border-color: #333333;
  }
  .error{
    font-family: 'Noto Sans', sans-serif;
    font-size: 12px;
    line-height: 12px;
    color: #ff4444;
    transition: opacity 0.4s ease-in-out;
    padding: 0;
    margin: 0;
    position: absolute;
    transform: translateY(40px);
  }
`;
InputStyled.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  register: PropTypes.any.isRequired,
  error: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
};
