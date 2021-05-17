import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Nav from './../_layout/Nav';
import Oracle from './../_layout/Oracle'
// import Content from './Content';
import Footer from './../_layout/Footer';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import Cookie from './../_layout/Cookie';
import $ from 'jquery';
import './brand.scss';

export class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            products: [],
            shop: {}
        };

        // console.log(this.props.location)
    }


    componentDidMount() {
        var offset = $(`#${this.props.location.state.id}`).offset();
        console.log(offset);
        $('html').animate({
            scrollTop: offset.top,
        }, 50);
        
        document.title = "Brand";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
    }


    render() {

        return (
            <div id="brand">
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client} checkout={this.props.checkout}
                    openCart={this.props.openCart} />
                {/* <Nav /> */}
                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/brand">
                        <a>Our Brand</a>
                    </Link></li>
                </ul>
                <One />
                <Two products={this.props.products}
                    location={this.props.location}
                    history={this.props.history}
                    client={this.props.client}
                    collections = {this.props.collections}
                    addVariantToCart={this.props.addVariantToCart} />
                <Three />
                <Four />
                <Five />
                <Footer />
                <Link className="oracle" to="defy">
                    <Oracle />
                </Link>
                <Cookie />
            </div>
        )
    }
}

export default Brand;
