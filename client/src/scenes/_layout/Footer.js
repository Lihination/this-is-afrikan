import React, { Component, Fragment } from 'react';

// import logo from './../../images/logo.png';
import FacebookLogo from './../utilities/FacebookLogo';
import TwitterLogo from '../utilities/TwitterLogo';
import InstagramLogo from '../utilities/InstagramLogo';
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
import MobileFooter from './MobileFooter';
import $ from 'jquery';

export class Footer extends Component {
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
    render() {
        return (
            <Fragment>
            <footer>
                {/* <div className="container">
                    <li className="social">
                        <a href="https://www.facebook.com/profile.php?id=100002082594092"><FacebookLogo /></a>
                        <a href="#"><TwitterLogo /></a>
                        <a href="https://www.instagram.com/thisisafrikan/"><InstagramLogo /></a>
                    </li>
                </div> */}
                <div className="container">
                    <MobileFooter />
                    <div className="web-footer">
                    <ul >
                        <li><h1>About Us</h1></li>
                                    <li><Link to={{
                                            pathname: `brand`, state: {
                                                id: 1
                                            }
                                        }}>Our brand</Link></li>
                                    
                                    <li>
                                        <div className="collapsible">
                                            <div className="top" onClick={(e)=>{this.showContacts(e)}}><h1>Contact us</h1> <DownArrow /></div>
                                            <div className="bottom">
                                                <ol>
                                                    <li className="contacts"><b>Call: </b><p>+234 000 000 00</p></li>
                                                    <li className="contacts"><b>Mail: </b><p>support@thisisafrikan.com</p></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                        <ul>
                            <li><h1>Collections</h1></li>
                            <li><Link to="collections">Shop now</Link></li>
                            <li><Link to="defy">Defy odds adventure</Link></li>
                            {/* <li><Link to="collections">Premium collection</Link></li>
                            <li><Link to="collections">Urban collection</Link></li>
                            <li><Link to="collections">Upcoming collections</Link></li> */}
                        </ul>

                        {/* <ul >
                            <li><h1>Contact us</h1></li>
                            <li><a href="">+234 000 000 00</a></li>
                            <li><a href="">info@this.is.afrikan.com</a></li>
                        </ul> */}

                        <ul >
                            <li><h1>Legal</h1></li>
                            <li><a href="">Terms and conditions</a></li>
                            <li><Link to="policy">Warranty, shipping and return policy</Link></li>
                            {/* <li><Link to={{
                                    pathname: `brand`, state: {
                                        id: 1
                                    }
                                }}>About The Brand</Link></li> */}
                            <li><Link to="privacy">Privacy policy</Link></li>
                            {/* <img src={logo_white} alt="afrikan" /> */}
                        </ul>

                        {/* <ul>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Return policy</a></li>
                        <li><a href="">Return policy</a></li>
                    </ul> */}
                        <ul className="card-list">
                            <li><h1>Supported payment types</h1></li>
                            <li>
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215719/discover_la6nie.png"} alt="" />
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215702/visa_ijuyvv.png"} alt="" />
                            
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215722/express_kaille.png"} alt="" />
                            
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215760/mastercard_znezmq.png"} alt="" />
                            </li>
                        </ul>
                    </div>

                    <div className="footer-bottom">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/logo_white_z9edon.png"} alt="afrikan" />
                        <a href="https://www.facebook.com/profile.php?id=100002082594092"><FacebookLogo /></a>
                        <a href="https://twitter.com/thisisafrikan?s=20"><TwitterLogo /></a>
                        <a href="https://www.instagram.com/thisisafrikan/"><InstagramLogo /></a>
                    </div>
                    {/* <div className="card-types">
                        <p>Supported payment types</p>
                        <ul className="left">
                            <li>
                                <img src={discover} alt="" />
                            </li>
                            <li>
                                <img src={visa} alt="" />
                            </li>
                            <li>
                                <img src={wallet} alt="" />
                            </li>
                            <li>
                                <img src={mastercard} alt="" />
                            </li>
                        </ul>
                    </div> */}
                </div>
            </footer>
            </Fragment>
        )
    }
}

export default Footer;
