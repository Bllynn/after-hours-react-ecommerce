import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput: '',
            passInput: ''
         }
    }

    render() { 
        return ( 
            <div className='login-container'>
                <div className='login-card'>
                    <h1>Login</h1>
                    <form className='login-edit-form'>
                        <label for='username'>Username</label>
                            <input type="text" name='username' className='login-edit-input'/>
                        <label for='password'>Password</label>
                            <input type="password" name='password' className='login-edit-input'/>
                        <button className='login-edit-btn'>Submit</button>
                    </form>
                </div>

            </div>
         )
    }
}
 
export default Login;