import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Nav from './../_layout/Nav';
import Footer from './../_layout/Footer';
import Content from './Content';
import Link from 'next/link';
import RightCaret from './../utilities/RightCaret';

export class Products extends Component {
    render() {
        return (
            <div id="products">
                <Topper history={this.props.history} />
                <ul className="indexes">
                    <li><Link href="/">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link href="/products">
                        <a>Products</a>
                    </Link></li>

                </ul>
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Products
