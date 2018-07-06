import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ProductDetail extends React.Component {
        render(){

            let thisProduct = this.props.catalog.filter( product => {
                let param = +this.props.match.params.id
                return product.id === param
            })
            thisProduct = thisProduct[0] ? thisProduct[0] : thisProduct

            return (
                <div>
                    <h1>Name: { thisProduct.name ? thisProduct.name: null } </h1>
                    <br />
                    <h1>Price: { thisProduct.price ? thisProduct.price: null } </h1>
                    <br />
                    <Link to='/'> Go Back </Link>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        catalog: state.catalog
    } 
}

export default connect(mapStateToProps)(ProductDetail)