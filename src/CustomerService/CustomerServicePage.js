import React, {Component, Fragment} from 'react';
import CustomerService from './CustomerService';

class CustomerServicePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment><h1>Customer Service</h1>
                <CustomerService/>
            </Fragment>
        );
    }
}

export default CustomerServicePage;