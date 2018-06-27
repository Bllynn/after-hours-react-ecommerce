import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Navbar from './components/Navbar/Navbar'
import CartBar from './components/CartBar/CartBar'
import Product from './components/Product/Product'
import faker from 'faker' 

class App extends Component {
  constructor(){
    super()

    let products = [];

    for(let i=1; i<=50; i++){
      let price = faker.commerce.price()
      let prodName = faker.commerce.product()
      let image = 'http://lorempixel.com/150/150/abstract/'
      let product = {
        id: i,
        name: prodName,
        image: image,
        price: price
      }

      products.push(product)
    }

    this.state = {
      catalog: products,
      cart: []
    }
  }

  purchase = (item) => {
    let newCart = [...this.state.cart, item];
    this.setState({
      cart: newCart
    })    

  }

  render() {
    let displayProducts = this.state.catalog.map( product => {
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
      <div className='app-container'>
        <Navbar />
        <div className='app-middle-container'>
          <CartBar 
            cart={ this.state.cart } />
          <div className='app-products-container'>
            { displayProducts }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
