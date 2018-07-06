import React from 'react';
import { connect } from 'react-redux';

class ProductDetail extends React.Component {
        render(){

            let thisProduct = this.props.catalog.filter( product => {
                let param = +this.props.match.params.id
                return product.id === param
            })
            thisProduct = thisProduct[0] ? thisProduct[0] : thisProduct

            return (
                <div>
                    Name: { thisProduct.name ? thisProduct.name: null }
                    <br />
                    Price: { thisProduct.price ? thisProduct.price: null }
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