import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import ProductPage from '../Product/ProductPage';

class CategoryPage extends Component {

    constructor(props) {
        super(props);
        this.categoryPath = props.categoryPath;
        this.categoryName = props.categoryName;
        console.log(props.categoryName);
    }

    render() {
        return (
            <div>
                <h1>{this.props.categoryName}</h1>
                <ul style={{listStyleType: 'none'}}>
                    <li><Link to={this.categoryPath + '/product1'}>{this.categoryName}</Link></li>
                    <li><Link to={this.categoryPath + '/product2'}>{this.categoryName}</Link></li>
                    <li><Link to={this.categoryPath + '/product3'}>{this.categoryName}</Link></li>
                    <li><Link to={this.categoryPath + '/product4'}>{this.categoryName}</Link></li>
                    <li><Link to={this.categoryPath + '/product5'}>{this.categoryName}</Link></li>
                </ul>
                <Route path={this.categoryPath + '/product1'} component={ProductPage} productName='Product 1' />
                <Route path={this.categoryPath + '/product2'} component={ProductPage} productName='Product 2' />
                <Route path={this.categoryPath + '/product3'} component={ProductPage} productName='Product 3' />
                <Route path={this.categoryPath + '/product4'} component={ProductPage} productName='Product 4' />
                <Route path={this.categoryPath + '/product5'} component={ProductPage} productName='Product 5' />
            </div>
        );
    }
}

export default CategoryPage;
