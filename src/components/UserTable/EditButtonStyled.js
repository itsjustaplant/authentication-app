/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

function EditButtonStyled(props) {
  const history = useHistory();
  return (
    <button className={props.className} onClick={() => {
      history.push('/edit');
    }}>Edit</button>
  );
}

export const EditButton = styled(EditButtonStyled)`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 16px;
  padding: 8px 32px;
  color: #828282;
  background-color: #ffffff;
  border: 1px solid #828282;
  border-radius: 12px;
  transition: background-color 0.4s ease-in-out;
  :hover{
    background-color: #f1f1f1;
  }
`;

EditButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
