import React, { Component } from 'react';


class Product extends Component {

    constructor(props) {
        super(props);
        this.productName = "Test Product";
    }

    render() {
       return <p>{this.productName}</p>;
    }
}

export default Product;
