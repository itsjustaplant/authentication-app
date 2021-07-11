/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

function UserStyled(props) {
  const email = Cookies.get('userEmail');

  return (
    <div className={props.className}>
      <h1>{email}</h1>
    </div>
  );
}

export const User = styled(UserStyled)`

`;

UserStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
