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
    <button className={props.className} onClick={() => handleClick()}>LOGUT</button>
  );
}

export const ExitButton = styled(ExitButtonStyled)`
  margin-left: auto;
`;

ExitButtonStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
