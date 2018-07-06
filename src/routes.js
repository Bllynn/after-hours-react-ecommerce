import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import ProfileEdit from './components/ProfileEdit/ProfileEdit'
import CartDetail from './components/CartDetail/CartDetail'
import ProductDetail from './components/ProductDetail/ProductDetail'

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ Login } />
        <Route path='/profile/edit' component={ ProfileEdit } />
        <Route path='/profile' component={ Profile } />
        <Route path='/cart' component={ CartDetail } />
        <Route path='/product/:id' component={ ProductDetail } />

    </Switch>
)
