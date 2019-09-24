import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleFilterTextChange = (value) => {
        this.setState({
            filterText: value
        })
    }

    render() {
        const products = PRODUCTS;

        return (
            <div>
                <SearchBar handleChange={this.handleFilterTextChange} />
                <ProductTable products={products} filterText={this.state.filterText}/>
            </div>
        )
    }
}

export default App;