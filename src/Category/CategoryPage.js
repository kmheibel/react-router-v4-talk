import React, {Component, Fragment} from 'react';

class CategoryPage extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <h1>{this.title}></h1>
        )
    }
}

export default CategoryPage
