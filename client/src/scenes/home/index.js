import React, { Component } from 'react';
import FrontNav from './../_layout/FrontNav';
import Topper from '../_layout/Topper';
import Footer from '../_layout/Footer';
import Oracle from './../_layout/Oracle';
import Cart from './../_layout/Cart';
import Cookie from './../_layout/Cookie';
import Header from './Header';
import Bottom from './../_layout/Bottom';
import DefyOdds from './DefyOdds';
import $ from 'jquery';

import './home.scss';

import Collections from './Collections';
// import './home.module.scss';
import Client from 'shopify-buy';
// import sound from './../../images/sound.mp3';

export class Home extends Component {
    constructor(props) {
        super(props);

        console.log(this.audio)
        // this.audio.play();
        this.audio = new Audio("https://res.cloudinary.com/bjornbassey/video/upload/v1613750189/sound_dp9xzs.mp3");
        
    }

    componentWillMount() {

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        
        document.title = "This is afrikan";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);

        
    }

    render() {
        // this.audio.play();
        return (
            <div id="home">
                {/* <audio id="audio" className="sound" controls></audio> */}
                {/* <iframe src={"https://res.cloudinary.com/bjornbassey/video/upload/v1613750189/sound_dp9xzs.mp3"} className="sound" allow="autoplay" id="silence_audio" ></iframe> */}
                {this.props.children}
                {/* <Landing /> */}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} />
                {/* <Nav /> */}
                {/* <FrontNav /> */}
                <div className="content">
                    <div className="back"></div>
                    <Header />
                    <DefyOdds />
                    <Collections />
                </div>
                
                <Bottom />
                <Oracle/>
                <Cookie />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Home;
