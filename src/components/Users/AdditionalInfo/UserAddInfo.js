import React from 'react';

const UserADDinfo = ({ company }) => {
  return (
    <ul>
      <div key={Date.now()}>
        <li>{company.name}</li>
        <li>{company.catchPhrase}</li>
        <li>{company.bs}</li>
      </div>
    </ul>
  );
};

export default UserADDinfo;
