import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import ContractLogo from '../utilities/ContractLogo';
import CreditLogo from '../utilities/CreditLogo';
import BidLogo from '../utilities/BidLogo';
import MaskLogo from '../utilities/MaskLogo';
// import dashboard from './../../images/dashboard.png';
// import mask from './../../images/mask_black.png';
// import credit from './../../images/credit.png';
// import shoes from './../../images/shoes_black.png';
// import shoes from './../../images/shoes_black.png';

export class Process extends Component {
    learnMore = ()=> {
        this.props.change("learn-more");
    }
    examples = ()=> {
        this.props.change("examples");
    }

    componentDidMount(){
        setTimeout(()=> {
            $(".process").find(".top").find("svg").animate({
                opacity: 1
            },500)
        }, 500)
        var i = 0;
        var txt = "Wait a minute."
        var length = txt.length;
        setTimeout(()=>{
            setTimeout(function loop() {
                $(`.process`).find(".first").html(txt.substring(0, i++));
                // ////////////////////////////
                if (i >= length + 1) {
                    return;
                    }
                    setTimeout(loop, 20);
            }, 10);
        }, 700)
            
        var second = "Before we get acquainted please take a moment to run through how this works. I’m looking forward to meeting you soon… ";    
        var length2 = second.length;
        setTimeout(()=>{
            setTimeout(function loop() {
                $(`.process`).find(".second").html(second.substring(0, i++));
                // ////////////////////////////
                if (i >= length2 + 1) {
                    return;
                }
                setTimeout(loop, 20);
            }, 10);
        }, 1300)

        setTimeout(()=> {
            $(".process").find(".one").animate({
                opacity: 1
            },500)
        }, 2000)

        setTimeout(()=> {
            $(".process").find(".two").animate({
                opacity: 1
            }, 500)
        }, 2500)

        setTimeout(()=> {
            $(".process").find(".three").animate({
                opacity: 1
            }, 500)
        }, 3000)

        setTimeout(()=> {
            $(".process").find(".four").animate({
                opacity: 1
            }, 500)
        }, 3500)

        setTimeout(()=> {
            $(".process").find(".button").animate({
                opacity: 1
            }, 500)
        }, 4000)

        setTimeout(()=> {
            $(".info").animate({
                opacity: 0
            }, 500)
        }, 5000)

        setTimeout(()=> {
            $(".process").find(".top").find("svg").animate({
                opacity: 0
            },500)
        }, 5500)
    }
    render() { 
        return (
            <div className="process">
                <div className="inner">
                    <div className="top">
                        <GreenAfricanMask />
                        <div className="right">
                            <p className="info first">
                            
                            </p>
                            <p className="info second"></p>
                        </div>
                        
                    </div>
                    <div className="bottom">
                        <div className="step one">
                            <div className="step-left">
                                {/* <img src={credit} alt="" /> */}
                                <span>1</span>
                            </div>
                            <div className="step-right">
                                <h2>FREE Sign-up Process</h2>
                                <p>
                                    First sign up to create free account that enables you to sign in <Link to="login">here</Link> at any time to view your <Link to="dashboard">consultation dashboard</Link>. Signing-up takes 1 minute.
                                </p>
                            </div>
                        </div>

                        <div className="step two">
                            <div className="step-left">
                                {/* <img src={mask} alt="" /> */}
                                <span>2</span>
                            </div>
                            <div className="step-right">
                                <h2>Consult the Oracle</h2>
                                <p>
                                    Next, meet the Oracle; our first generation cyber robot based on our beta methodology to uncover your
                                    personality type within an ancient African ethos.<a onClick={this.learnMore}>(Learn more about the Oracle and a civilization that inspired Wakanda)</a>. This step takes 5 minutes.
                                </p>
                            </div>
                        </div>

                        <div className="step three">
                            <div className="step-left">
                                {/* <img src={dashboard} alt="" /> */}
                                <span>3</span>
                            </div>
                            <div className="step-right">
                                <h2>View Consultation Dashboard</h2>
                                <p>
                                At the end of your consultation, the Oracle identifies your personality type within this African ethos and provides you with a dashboard summary. The dashboard links to a detailed report. <a onClick={this.examples}>(See example)</a>
                            </p>
                            </div>
                        </div>

                        <div className="step four">
                            <div className="step-left">
                                {/* <img src={shoes} alt="" /> */}
                                <span>4</span>
                            </div>
                            <div className="step-right">
                                <h2>See Your Shoes and Other Private Collections</h2>
                                <p>
                                    Finally, you’ll be able to view the unique design of Defy Odds shoes for your personality. If you want them,
                                    you’ll have access to bid process not available to the public. See other shoe collections for your
                                    personality that are not available publicly.
                                </p>
                            </div>
                        </div>

                        {
                            this.props.signIn?
                            null:
                            <div className="button">
                            <a onClick={() => this.props.change("registration")} className="btn btn-black">Sign-up to Meet the Oracle</a>
                        </div>
                        }
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default Process;