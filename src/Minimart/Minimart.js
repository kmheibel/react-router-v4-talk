import React, {Component, Fragment} from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CustomerServicePage from '../CustomerService/CustomerServicePage';
import CategoriesPage from '../Categories/CategoriesPage';
import CategoryPage from "../Category/CategoryPage";

class Minimart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <AppBar position="static">
                    <Toolbar style={{alignSelf: 'stretch'}}>
                        <Button style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5em'}} component={Link}
                                to={'/minimart/categories'}>Categories</Button>
                        <Button style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5em'}} component={Link}
                                to={'/minimart/customerService'}>Customer Service</Button>
                    </Toolbar>
                </AppBar>
                <Route path={'/minimart/customerService/'} component={CustomerServicePage}/>
                <Route path={'/minimart/categories/'} component={CategoriesPage}/>

                <Route path={'/minimart/grocery'} component={CategoryPage} categoryName={"Grocery"} />
                <Route path={'/minimart/housewares'} component={CategoryPage} categoryName="Housewares"/>
                <Route path={'/minimart/apparel'} component={CategoryPage} categoryName="Apparel"/>
                <Route path={'/minimart/apparel/mens'} component={CategoryPage} categoryName="Mens Apparel"/>
                <Route path={'/minimart/apparel/womens'} component={CategoryPage} categoryName="Womens Apparel"/>
                <Route path={'/minimart/apparel/boys'} component={CategoryPage} categoryName="Boys Apparel"/>
                <Route path={'/minimart/apparel/girls'} component={CategoryPage} categoryName="Girls Apparel"/>
            </div>
        );
    }
}

export default Minimart;