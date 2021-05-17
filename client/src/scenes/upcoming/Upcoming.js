import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Nav from './../_layout/Nav';
import Content from './Content';
import Footer from './../_layout/Footer';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import $ from 'jquery';
import Cart from './../_layout/Cart';
import Client from 'shopify-buy';

import './upcoming.scss';

export class Upcoming extends Component {
    componentDidMount() {
        console.log(this.props.location)
        window.scrollTo(0, 0)
        document.title = "Product";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
    }
    render() {
        return (
            <div id="upcoming">
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />

                <ul className="indexes">
                    <li><Link to="/">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/collections">
                        <a>Our collections</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/upcoming">
                        <a>Upcoming collections</a>
                    </Link></li>
                </ul>
                {/* <Nav /> */}
                <Content products={this.props.products}
                    client={this.props.client}
                    addVariantToCart={this.props.addVariantToCart} />
                <Footer />
            </div>
        )
    }
}

export default Upcoming
