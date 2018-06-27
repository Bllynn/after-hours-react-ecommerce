import React, {Component} from 'react'
import './CartBar.css'

export default class CartBar extends Component {

    render(){

        let displayCart = this.props.cart.map( item => <li key={item.id}> { item.name } </li>)

        return(
            <div className='cartbar-container'>
                <h3>Your Cart</h3>
                <ul>
                    { displayCart }
                </ul>
            </div>
        )
    }


}