import React, {Fragment, Component} from 'react';
import Product from "./Product";

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.productName = props.productName;
    }

    render() {
        return (
            <Fragment>
                <h1 style={{textAlign: 'center'}}>Products</h1>
                <div style={{marginRight: '50px', marginLeft: '50px'}}>
                    <Product productName={this.productName}/>
                </div>
            </Fragment>
        );
    }

}

export default ProductPage;
