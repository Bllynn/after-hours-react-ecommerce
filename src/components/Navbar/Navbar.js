import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    render() {
        return (
            <nav className='navbar-nav'>
                <h1>Cramazon</h1>
                <ul className='navbar-menu'>
                    <Link to='/cart'><li>CART</li></Link>
                    <Link to='/profile'><li>PROFILE</li></Link>
                    <Link to='/'><li>HOME</li></Link>
                </ul>
            </nav>
        )
    }
}