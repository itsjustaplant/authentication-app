/* eslint-disable require-jsdoc, max-len*/

import React, {useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {TableHeader} from './TableHeader.styled';
import Cookies from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../actions/userActions';

function UserTableStyled(props) {
  const accessToken = Cookies.get('accessToken');
  const email = Cookies.get('userEmail');

  const phone = useSelector((state) => state.user.userPhone);
  const photo = useSelector((state) => state.user.userPhotoURL);
  const bio = useSelector((state) => state.user.userBio);
  const name = useSelector((state) => state.user.userName);

  console.log(phone, photo, bio, name);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser({
      email: email,
      token: accessToken,
    }));
  }, []);

  return (
    <div className={props.className}>
      <TableHeader/>
      <table>
        <tbody>
          <tr>
            <td>PHOTO</td>
            <td>
              <img src='./user.png' />
            </td>
          </tr>
          <tr>
            <td>
            NAME
            </td>
            <td>
              {name}
            </td>
          </tr>
          <tr>
            <td>
            BIO
            </td>
            <td>
              {bio}
            </td>
          </tr>
          <tr>
            <td>
              PHONE
            </td>
            <td>
              {phone}
            </td>
          </tr>
          <tr>
            <td>
              EMAIL
            </td>
            <td>
              {email}
            </td>
          </tr>
          <tr>
            <td>
            PASSWORD
            </td>
            <td>
            ********
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
    border-collapse: collapse;
  }
  tbody{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  tr{
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
  }
  td{
    font-family: 'Noto Sans', sans-serif;
    padding: 12px 20px;
  }
  td:nth-child(odd){
    font-size: 12px;
    line-height: 16px;
    color: #bdbdbd;
  }
  td:nth-child(even){
    font-size: 16px;
    line-height: 20px;
  }
  img{
    width: 72px;
    height: 72px;
  }
`;

UserTableStyled.propTypes = {
  className: PropTypes.string.isRequired,
};
