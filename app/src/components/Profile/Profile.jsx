import React from 'react';
import { string, number, shape } from 'prop-types';
import './Profile.scss'

function Profile({name, tag, location,avatar, stats}) {
    return (
        <div className="profile">
                <div className="description">
                    <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                    />
                    <p className="name"><span>Имя пользователя:</span> {name}</p>
                    <p className="tag"><span>Тег в социальной сети:</span> {tag}</p>
                    <p className="location"><span>Город и страна:</span> {location}</p>
                </div>
                <ul className="stats">
                    <li>
                    <span className="label">Followers: </span>
                    <span className="quantity">{stats.followers}</span>
                    </li>
                    <li>
                    <span className="label">Views: </span>
                    <span className="quantity">{stats.views}</span>
                    </li>
                    <li>
                    <span className="label">Likes: </span>
                    <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
                </div>
    );
}

Profile.propTypes = {
    name: string,
    tag:  string,
    location: string,
    avatar: string,
    stats: shape({
        followers: number,
        views: number,
        likes: number,
    }),
}

Profile.defaultProps = { 
    name: 'Kostya', 
    tag: 'lol', 
    location: 'Kiev', 
    stats: {
        followers: 0, 
        views: 0, 
        likes: 0
    }
};

export default Profile;