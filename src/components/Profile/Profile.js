import React from 'react';
import {Link} from 'react-router-dom'
import './Profile.css'

export default function Profile(props) {

    return (
        
        <div className='profile-container'>
            <div className="profile-user">
                <h1>My Profile</h1>
                <img src='http://via.placeholder.com/200x200' />
                <div class='profile-text'>
                    <p>Username: trav-i-is</p>
                    <p>Password: *********</p>
                    <p>Name: Travis Allen</p>
                    <p>Email: travis.allen@devmounta.in</p>
                </div>
                <Link 
                    to='/profile/edit'>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
} 