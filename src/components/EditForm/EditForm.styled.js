/* eslint-disable require-jsdoc, max-len, no-unused-vars */

import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';
import {useForm} from 'react-hook-form';


import {Label} from './Label.styled';
import {TexArea} from './TextArea.styled';
import {SubmitButton} from '../LoginRegisterForm/SubmitButton.styled';

function EditFormStyled(props) {
  const {register, handleSubmit} = useForm();

  let elementRef = useRef(null);
  let Tween;

  useEffect(() => {
    Tween = TweenMax.to(
        elementRef,
        {
          opacity: 1,
          y: -10,
        },
    );
  }, []);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className={props.className}>
      <h1>
          Change Info
      </h1>
      <p>
        Changes will be reflected to all services
      </p>
      <form
        ref={(element) => {
          elementRef = element;
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label text='Name'/>
        <TexArea
          row={1}
          placeholder='Enter your name...'
          register={{...register('name')}}
        />
        <Label text='Bio'/>
        <TexArea
          row={1}
          placeholder='Enter your bio...'
          register={{...register('bio')}}
        />
        <Label text='Phone'/>
        <TexArea
          row={1}
          placeholder='Enter your phone...'
          register={{...register('phone')}}
        />
        <SubmitButton text='Save'/>
      </form>
    </div>
  );
}

export const EditFrom = styled(EditFormStyled)`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 90%, 900px);
  margin-top: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 30px 40px;
  
  >h1{
    color: #000000;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 4px;
  }
  
  >p{
    color: #bdbdbd;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 24px;
  }
  
  >form{
    display: flex;
    flex-direction: column;
  }
`;

EditFormStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
