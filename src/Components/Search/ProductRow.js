import React, { Component } from 'react';
import './ProductRow.css'

class ProductRow extends Component {
    render() {
        const { product } = this.props;

        return (
            <tr className={!product.stocked ? 'inStock' : ''}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

export default ProductRow;