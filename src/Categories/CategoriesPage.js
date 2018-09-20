import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


class CategoriesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment>
                <h1>Categories</h1>

                <ul style={{listStyleType: 'none', textAlign: 'left'}}>
                    <li><Link to={'/minimart/grocery'}>Grocery</Link></li>
                    <li><Link to={'/minimart/housewares'}>Housewares</Link></li>
                    <li><Link to={'/minimart/apparel'}>Apparel</Link>
                        <ul style={{listStyleType: 'none', textAlign: 'left'}}>
                            <li><Link to={'/minimart/apparel/mens'}>Mens</Link></li>
                            <li><Link to={'/minimart/apparel/womens'}>Womens</Link></li>
                            <li><Link to={'/minimart/apparel/boys'}>Boys</Link></li>
                            <li><Link to={'/minimart/apparel/girls'}>Girls</Link></li>
                        </ul>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default CategoriesPage;