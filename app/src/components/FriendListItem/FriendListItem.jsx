import React from 'react';
import { string, shape, boolean } from 'prop-types';
import './FriendListItem.scss'

function FriendListItem({friend}) {
    return (
        <li className="item">
            <div className="itemWrapper">
                {
                    <span className={friend.isOnline ? 'status active' : 'status'}></span>
                }
                <img className="avatar" src={friend.avatar} alt="" width="48" />
                <p className="name">{friend.name}</p>
            </div>
        </li>
    );
}

FriendListItem.propTypes = {
    friend: shape({
        isOnline: boolean,
        avatar: string,
        name: string
      })
}

FriendListItem.defaultProps = { 
    friend: {}
};

export default FriendListItem;