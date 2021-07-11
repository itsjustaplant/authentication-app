/* eslint-disable require-jsdoc, max-len */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {EditButton} from './EditButtonStyled';

function TableHeaderStyled(props) {
  return (
    <div className={props.className}>
      <div className='header__left'>
        <h1>Profile</h1>
        <p>Some info may be visible to other people </p>
      </div>
      <div className='header__right'>
        <EditButton/>
      </div>
    </div>
  );
}

export const TableHeader = styled(TableHeaderStyled)`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e0e0e0;
  padding: 30px 20px;
  gap: 10px;
  
  .header__left>h1{
    font-family: 'Noto Sans', sans-serif;
    font-size: 24px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    text-align: left;
  }
  .header__left>p{
    font-family: 'Noto Sans', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
    padding: 0;
    margin: 4px 0 0 0;
  }
  .header__right{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;

TableHeaderStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
