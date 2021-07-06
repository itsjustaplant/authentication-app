/* eslint-disable require-jsdoc */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class LogoStyled extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className} >
        <img src='./devchallenges.svg'/>
      </div>
    );
  }
}

export const Logo = styled(LogoStyled)`
  width: 350px !important;
  display: flex;
  
  img{
    align-self: flex-start;
    width: 130px;
    padding-bottom: 24px;
  }
`;

LogoStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
