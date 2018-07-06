import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './ProfileEdit.css'

export default class ProfileEdit extends Component {
    constructor() {
        super()

        this.state = {
            userNameInput: 'trav-is', 
            passwordInput: 'myPasswordIsUberSecure', 
            nameInput: 'Travis Allen', 
            emailInput: 'travis.allen@devmounta.in'
        }
    } 

    render() {

        const { userNameInput, passwordInput, nameInput, emailInput } = this.state
        
        return (
            
            <div className='profile-edit-container'>
                <div className='profile-edit-user'>
                <h1>Edit Profile</h1>
                    <img src='http://via.placeholder.com/200x200' />
                    <div class='profile-edit-text'>
                        <form className='profile-edit-form'>
                            <label for='username'>User Name:</label>
                                <input 
                                    class='profile-edit-input' 
                                    name='username' 
                                    type='text' 
                                    value={ userNameInput } />
                            <label for='password'>Password:</label>
                                <input 
                                    class='profile-edit-input' 
                                    name='password' 
                                    type='password' 
                                    value={ passwordInput }/>
                            <label for='name'>Name:</label>
                                <input 
                                    class='profile-edit-input' 
                                    name='name' 
                                    type='text' 
                                    value={ nameInput }/>
                            <label for='email'>Email:</label>
                                <input 
                                    class='profile-edit-input' 
                                    name='email' 
                                    type='text'  
                                    value={ emailInput }/>
                            <button class='profile-edit-btn' type='submit'>Save</button>
                            <button class='profile-edit-btn' type=''>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

} 