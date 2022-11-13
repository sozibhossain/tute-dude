import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

const Profile = ({children}) => {
    return (
        <div className='profile-area'>
            <div className='profile-menu-area'>
                <NavLink className='profile-menu' to="/uiux">UI/UX &gt;</NavLink>
                <NavLink className='profile-menu' to="/ReferEarn"> Refer & Earn &gt;</NavLink>
                <NavLink className='profile-menu' to="/FriendsReferred"> FriendsReferred</NavLink>
            </div>
            <div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Profile;