import React from 'react';
import { Link } from 'react-router-dom';

function FriendsListItem(props) {
  console.log('props friends', props);
  return (
    <div>
      <Link className="friends-item" to={`user/${props.friend._id}`}>
        <div className="friends-img">
          <img
            src="https://avatars.dicebear.com/api/avataaars/13478.svg"
            alt="user-pic"
          />
        </div>
        <div className="friends-name">{props.friend.name}</div>
      </Link>
    </div>
  );
}

export default FriendsListItem;
