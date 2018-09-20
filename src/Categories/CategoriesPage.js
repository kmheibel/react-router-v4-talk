import React, {Component, Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import CategoryPage from "../CategoryPage";

class CategoriesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment>
                <h1>Categories</h1>

                <ul>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
                    <li><Link to={'/housewares'}>Housewares</Link></li>
                    <li><Link to={'/apparel'}>Apparel</Link>
                        <ul>
                            <li><Link to={'/apparel'}>Mens</Link></li>
                            <li><Link to={'/apparel'}>Womens</Link></li>
                            <li><Link to={'/apparel'}>Boys</Link></li>
                            <li><Link to={'/apparel'}>Girls</Link></li>
                        </ul>
                    </li>
                </ul>
                <Route path={'/minimart/grocery/'} component={CategoryPage} category="Grocery"/>
                <Route path={'/minimart/housewares/'} component={CategoryPage} category="Housewares"/>
                <Route path={'/minimart/apparel/'} component={CategoryPage} category="Apparel"/>
                <Route path={'/minimart/apparelmens/'} component={CategoryPage} category="Apparel"/>
                <Route path={'/minimart/apparelwomens/'} component={CategoryPage} category="Apparel"/>
                <Route path={'/minimart/apparel/boys'} component={CategoryPage} category="Apparel"/>
                <Route path={'/minimart/apparel/girls'} component={CategoryPage} category="Apparel"/>


            </Fragment>
        )
            ;
    }
}

export default CategoriesPage;