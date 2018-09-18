import React, {Component} from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ProductPage from "../Product/ProductPage";

class Retail extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{height: '100%'}}>
                {/*   <MuiThemeProvider theme={theme}> */}
                    <AppBar position="static">
                        <Toolbar style={{alignSelf: 'stretch'}}>
                            {/*              <Button style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5em'}} component={Link}
                                    to={"/"}>Home</Button>  */}
                            <Button style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5em'}} component={Link}
                                    to={'/retail/product'}>Product</Button>
                            {/*          <Button style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5em'}} component={Link}
                                    to={"/retail/customerService"}>Customer Service</Button>  */}
                       </Toolbar>
                    </AppBar>
                    <Route path={'/retail/product/'} component={ProductPage}/>
                {/*</MuiThemeProvider>*/}
            </div>
        );
    }


}

export default Retail;