/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
// import {
//   Redirect,
// } from 'react-router-dom';

function ExitButtonStyled(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick() {
    dispatch({type: 'EXIT'});
    handleReturn();
  }
  function handleReturn() {
    console.log(history);
    history.push('/');
  }
  return (
    <button
      className={props.className}
      onClick={() => handleClick()}
    >
      <span className="material-icons">
        logout
      </span>
      <p>
        Logout
      </p>
    </button>
  );
}

export const ExitButton = styled(ExitButtonStyled)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-left: auto;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 12px 15px;
  transition: background-color 0.4s ease-in-out;
  :hover{
    background-color: #f2f2f2;
  }
  
  >span{
    color: #eb5757;
    font-size: 16px;
    padding: 0 12px 0 0;
  }
  
  >p{
    font-family: Noto Sans,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #eb5757;
    margin: 0;
    padding: 0;
    line-height: 16px;
  }
`;

ExitButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
