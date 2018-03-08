import React from 'react';

const ProfileInfo = ({username, firstName, lastName, email}) => (
  <ul className="grids">
    <li> User name: </li>
    <li> {username} </li>
    <li> First name: </li>
    <li> {firstName}  </li>
    <li> Last name: </li>
    <li> {lastName}  </li>
    <li> E-mail: </li>
    <li> {email} </li>
  </ul>
)
export default ProfileInfo;
