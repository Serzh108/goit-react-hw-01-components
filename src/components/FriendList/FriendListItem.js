import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span className="status"></span>
      ) : (
        <span className="status1"></span>
      )}
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
