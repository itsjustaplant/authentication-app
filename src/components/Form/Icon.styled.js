/* eslint-disable require-jsdoc */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class IconStyled extends React.Component {
  constructor(props) {
    super(props);
    this.classname = `material-icons ${this.props.className}`;
  }
  render() {
    const color = (this.props.onfocus ? '#333333' : '#828282');
    return (
      <span className={this.classname} style={{color: color}}>
        {this.props.icon}
      </span>
    );
  }
}

export const Icon = styled(IconStyled)`
  padding: 0 6px 0 0;
  font-size: 20px;  
  line-height: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  transition: color 0.4s ease-in-out;
`;

IconStyled.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onfocus: PropTypes.bool.isRequired,
};
