import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Content from './Content';
import Footer from './../_layout/Footer';
import $ from 'jquery';
import Cookie from './../_layout/Cookie';
import Oracle from './../_layout/Oracle';
import { Link } from 'react-router-dom';
import './dashboard.scss';

export class Collections extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location)
        this.txt= this.props.location.state == undefined ? "Defy Odds" : this.props.location.state.collection;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Collections";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);
        const t = this;
       
    }

    render() {
        return (
            <div id="collections">
                <Link className="oracle-ghost" to="defy">
                    <Oracle />
                </Link>
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />
                {/* <Nav /> */}
                <Content products={this.props.products}
                    collection={this.txt}
                    collections={this.props.collections}
                    client={this.props.client}
                    addVariantToCart={this.props.addVariantToCart} />
                {/* <Services /> */}
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default Collections;