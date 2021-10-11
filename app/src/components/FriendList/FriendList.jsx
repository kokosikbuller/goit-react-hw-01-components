import React from 'react';
import { array } from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import './FriendList.scss'

function FriendList({friends}) {
    return (
        <ul className="friend-list">
            {
                friends.map(item => {
                    return (
                        <FriendListItem key={item.id} friend={item} />
                    )
                })
            }
        </ul>
    );
}

FriendList.propTypes = {
    friends: array.isRequired
}

FriendList.defaultProps = { 
    friends: []
};



export default FriendList;