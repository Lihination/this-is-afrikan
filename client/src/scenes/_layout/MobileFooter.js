import React, { Component, Fragment } from 'react';

// import logo from './../../images/logo.png';
// import FacebookLogo from './../utilities/FacebookLogo';
// import TwitterLogo from '../utilities/TwitterLogo';
// import InstagramLogo from '../utilities/InstagramLogo';
// import DiscoverLogo from './../utilities/DiscoverLogo';
// import VisaLogo from '../utilities/VisaLogo';
// import GoogleWallet from '../utilities/GoogleWallet';
// import MastercardLogo from '../utilities/MastercardLogo';
// import img from './../../images/footer-img.png';
// import logo_white from './../../images/logo_white.png';
// import discover from './../../images/discover.png';
// import visa from './../../images/visa.png';
// import wallet from './../../images/google-wallet.png';
// import mastercard from './../../images/mastercard.png';
import { Link } from 'react-router-dom';
// import express from './../../images/express.png'
import DownArrow from '../utilities/DownArrow';
import $ from 'jquery';

export class MobileFooter extends Component {
    showContacts = (e) => {
        console.log($(e.target).prop("tagName"))
        if($(e.target).prop("tagName") =="H1")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();      
    }
    showCollapsible = (e) => {
        console.log($(e.target).prop("tagName"))
        if($(e.target).prop("tagName") =="H1")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();      
    }

    render() {
        return (
            <div className="mobile-footer">
                <div className="collapsible">
                    <div className="top" onClick={(e)=>{this.showCollapsible(e)}}>
                        <h1>About Us</h1> <DownArrow />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><Link to={{
                                    pathname: `brand`, state: {
                                        id: 1
                                    }
                                }}>Our brand</Link></li>            
                            <li>
                                <div className="contacts collapsible">
                                    <div className="top" onClick={(e)=>{this.showContacts(e)}}><h3>Contact us</h3> <DownArrow /></div>
                                    <div className="bottom">
                                        <ol>
                                            <li className="contacts"><b>Call: </b><p>+234 000 000 00</p></li>
                                            <li className="contacts"><b>Mail: </b><p>info@this.is.afrikan.com</p></li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapsible">
                    <div className="top" onClick={(e)=>{this.showCollapsible(e)}}>
                        <h1>Collections</h1> <DownArrow />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><Link to="collections">Shop now</Link></li>
                            <li><Link to="defy">Defy odds adventure</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="collapsible">
                    <div className="top" onClick={(e)=>{this.showCollapsible(e)}}>
                        <h1>Legal</h1> <DownArrow />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li><a href="">Terms and conditions</a></li>
                            <li><Link to="policy">Warranty, shipping and return policy</Link></li>
                            <li><Link to="privacy">Privacy policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="collapsible" onClick={(e)=>{this.showCollapsible(e)}}>
                    <div className="top">
                        <h1>Supported payment types</h1> <DownArrow />
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215719/discover_la6nie.png"} alt="" />
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215702/visa_ijuyvv.png"} alt="" />
                            
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215722/express_kaille.png"} alt="" />
                            
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215760/mastercard_znezmq.png"} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileFooter
