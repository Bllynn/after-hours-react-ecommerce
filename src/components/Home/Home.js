import React, { Component } from 'react';
import Login from '../Login/Login'
import Product from '../Product/Product'
import CartBar from '../CartBar/CartBar'
import axios from 'axios'
import { connect } from 'react-redux'
import{ getAllProducts } from '../../dux/reducer'
import './Home.css'

class Home extends Component {
    constructor() {
        super();
        const img = 'http://via.placeholder.com/100x100'
        this.state = { 
            loggedIn: false,
            catalog: []
         }
    }
    
    componentDidMount() {
        const { getAllProducts } = this.props
        axios.get('/api/products')
        .then( products => {
            getAllProducts(products.data)
        })
    }

    render() {
    
    let displayProducts = this.props.catalog.map( product => {
        return (
            <Product 
            key={ product.id }
            id={ product.id } 
            name={ product.name }
            image={ product.image }
            price={ product.price }
            buy={ this.purchase }
            />
        )
    })
      
        return ( 
            <div className='home-middle-container'>
                <CartBar 
                    cart={ this.state.cart } />
                <div className='home-products-container'>
                    { displayProducts }
                </div>
            </div>
         )
    }
}

const actionCreators = {
    getAllProducts
}

function mapStateToProps(state) {
    return {
        catalog: state.catalog
    }
}
 
export default connect(mapStateToProps, actionCreators) (Home);