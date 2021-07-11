/* eslint-disable require-jsdoc, max-len*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {TableHeader} from './TableHeader.styled';

function UserTableStyled(props) {
  return (
    <div className={props.className}>
      <TableHeader/>
      <table>
        <tbody>
          <tr>
            <td>
            sa
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export const UserTable = styled(UserTableStyled)`
  width: clamp(300px, 90%, 900px);
  margin-top: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  
  table{
    width: 100%;
  }
`;

UserTableStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
