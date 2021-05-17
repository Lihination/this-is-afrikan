import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Nav from './../_layout/Nav';
import Oracle from './../_layout/Oracle'
import Footer from './../_layout/Footer';
import Cookie from './../_layout/Cookie';
import Content from './Content';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import $ from 'jquery';
import './bid.scss';

export class Bid extends Component {
    render() {
        return (
            <div id="bid">
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client} checkout={this.props.checkout}
                    openCart={this.props.openCart} />
                
                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/bid">
                        <a>Place A Bid</a>
                    </Link></li>
                </ul>
                
                <Content products={this.props.products}
                    collections={this.props.collections}
                    client={this.props.client}
                    addVariantToCart={this.props.addVariantToCart}
                />

                <Footer />
                <Link className="oracle" to="defy">
                    <Oracle />
                </Link>
                <Cookie />
            </div>
        )
    }
}

export default Bid;
