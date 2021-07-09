/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class SocialStyled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOn: false,
    };
  }

  render() {
    // const color = (this.state.isMouseOn) ? '#333333' : '#828282';
    const src = `./${this.props.icon}.svg`;
    return (
      <div className={this.props.className}>
        <img onMouseEnter={() => {
          this.setState({isMouseOn: true});
        }} onMouseLeave={() => {
          this.setState({isMouseOn: true});
        }} src={src}/>
      </div>
    );
  }
}

export const Social = styled(SocialStyled)`
  flex-basis: 100%;
  transition: filter 0.4s ease-in-out;
  :hover{
    filter: brightness(1%);
  }
`;

SocialStyled.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
