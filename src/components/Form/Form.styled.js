/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';

import {Input} from './Input.styled';
import {SubmitButton} from './SubmitButton.styled';

export function FormStyled(props) {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <form className={props.className} onSubmit={handleSubmit(onSubmit)}>
      <Input register={{...register('email')}} placeholder='Email' icon='email'/>
      <Input register={{...register('password')}} placeholder='Password' icon='lock'/>
      <SubmitButton text={props.text}/>
    </form>
  );
}

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  gap: 14px;
`;

FormStyled.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
