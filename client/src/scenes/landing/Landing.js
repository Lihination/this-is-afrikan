import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import './landing.scss';
import $ from 'jquery';
import Top from './Top';
import AfricanMask from './../utilities/GreenAfricanMask';
import LearnIcon from './../../utlilities/LearnIcon';
import { Link } from 'react-router-dom';
import BagIcon from './../../utlilities/BagIcon';
import { TweenMax, TimelineMax, Power1, gsap } from "gsap/all";

export class Landing extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)

        document.title = "This is afrikan";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
        
    }
    
    click=()=> {
        const t = this;
        $("#landing .content").css("z-index", "-1")
        gsap.to(
            document.querySelectorAll("#landing .content"),
            1.5,
            {
                y:  - $(window).outerHeight(),
                delay: 0.5,
                ease: "power3.InOut",
                
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    t.props.history.history.push({ pathname: "/home" })
                }
            }
        )
    }
    render() {
        return (
            <div id="landing">
                <Top client={this.props.client} checkout={this.props.checkout}
                    openCart={this.props.openCart} history={this.props.history} />
                <div className="content">
                    <div className="back">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1620837716/defy_landing_g1uohr.png"} />
                    </div>
                    <div className="middle">
                        <h1 className="title">More than luxury shoes</h1>

                        <div className="buttons">
                            <div className="button">
                                <Link to="/collections" className="navigate">
                                    <BagIcon />
                                </Link>
                                <h4>SHOP</h4>
                            </div>

                            <div className="button">
                                <Link to={{
                                    pathname: `brand`, state: {
                                        id: 1
                                    }
                                }} className="navigate">
                                    <LearnIcon />
                                </Link>
                                <h4>LEARN</h4>
                            </div>

                            <div className="button">
                                <Link to="/defy" className="navigate">
                                    <AfricanMask />
                                </Link>
                                <h4>ADVENTURE</h4>
                            </div>
                        </div>
                    </div>
                    
                    <a className="started" onClick={this.click}>CLICK TO GO TO HOME PAGE</a>
                </div>
            </div>
        )
    }
}

export default Landing
