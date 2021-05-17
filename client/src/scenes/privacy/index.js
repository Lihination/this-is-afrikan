import React, { Component } from 'react'
import FrontNav from '../_layout/FrontNav';
import Topper from '../_layout/Topper';
import Footer from '../_layout/Footer';
import Cookie from '../_layout/Cookie';
import Oracle from '../_layout/Oracle';
import Cart from '../_layout/Cart';
import Content from './Content';
import $ from 'jquery';
import Bottom from '../_layout/Bottom';
import './privacy.scss';

export class Privacy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        
        document.title = "Privacy policy";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
    }
    render() {
        return (
            <div id="privacy">
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} />
                
                {/* <Nav /> */}
                {/* <FrontNav /> */}
                <Content />
                <Bottom />
                <Cookie/>
            </div>
        )
    }
}

export default Privacy
