import React, { Component } from 'react';


class Product extends Component {

    constructor(props) {
        super(props);
        this.productName = props.productName;
    }

    render() {
       return <p>{this.productName}</p>;
    }
}

export default Product;
