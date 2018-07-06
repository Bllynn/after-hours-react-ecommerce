import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Navbar from './components/Navbar/Navbar'

class App extends Component {

  componentDidMount() {
    // axios.get()
  }

  purchase = (item) => {
    let newCart = [...this.state.cart, item];
    this.setState({
      cart: newCart
    })    
  }

  render() {
    return (
      <div className='app-container'>
        <Navbar />
        { routes }
        
      </div>
    );
  }
}

export default App;
