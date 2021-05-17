import React, { Component } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">

                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
