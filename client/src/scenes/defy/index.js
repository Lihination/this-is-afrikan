import React, { Component, Fragment } from 'react';
import Topper from './../_layout/Topper';
import Footer from './../_layout/Footer';
import Cookie from './../_layout/Cookie';
import Intro from './Intro';
import Examples from './Examples';
import LearnMore from './LearnMore';
// import $ from 'jquery';
import Trailer from './VideoTrailer';
import Registration from './Registration';
import Questions from './Questions';
import Auction from './Auction';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import $ from 'jquery';
import DefyLearnMore from './DefyLearnMore';
import FunFacts from './FunFacts';
import Process from './Process';
import Client from 'shopify-buy';
// import trailer from './../../images/trailer.mp4';
import firebase from './../../services/firebase';
import SquareIcon from './../../utlilities/SquareIcon';
import ExitButton from './../../utlilities/ExitButton.js';
// import firebase from './../../services/firebase';

import './defy.scss';
const client = Client.buildClient({
    storefrontAccessToken: 'cb3936bfd99f302b3dbad360ee75af47',
    domain: 'this-is-afrikan.myshopify.com/'
});
const user_ref = firebase.firestore().collection("users");
export class Defy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "intro",
            signIn: false,
            questions: true
        }
    }

    componentDidMount() {
        const t = this;
        document.title = "Defy Odds Collection";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);
        this.setState({
            page: this.props.location.state == undefined ? "intro" : this.props.location.state.page
        }, () => {
            this.change(this.state.page)
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                t.setState({
                    signIn: true
                })

                user_ref.where("user", "==", firebase.auth().currentUser.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=>{
                        const { answer } = doc.data();
                        if(answer){
                            t.setState({
                                questions:true
                            })
                        }
                        else{
                            t.setState({
                                questions:true
                            })
                        }
                    })
                })
            }
            else {
                t.setState({
                    signIn: false
                })
            }
        })

        
        window.scrollTo(0, 0)
    }

    change = (page, ret) => {
        this.setState({
            page: page
        }, function () {
            if (page == "registration") {
                $(".defy-nav li").removeClass("active");
                $("#registration").addClass("active");
            }
            else if (page == "payment") {
                $(".defy-nav li").removeClass("active");
                $("#payment").addClass("active");
            }
            else if (page == "intro") {
                $(".defy-nav li").removeClass("active");
                $("#intro").addClass("active");
            }
            else if (page == "questions") {
                $(".defy-nav li").removeClass("active");
                $("#questions").addClass("active");
            }
            else if (page == "auction") {
                $(".defy-nav li").removeClass("active");
                $("#auction").addClass("active");
            }
            else if (page == "process") {
                $(".defy-nav li").removeClass("active");
                $("#process").addClass("active");
            }
            else if (page == "trailer") {
                $(".defy-nav li").removeClass("active");
                $("#trailer").addClass("active");
            }
        })
    }

    openMenu = () => {
        $(".defy-left").animate({
            left: 0
        }, 500);
        $(".defy-right .transparent").fadeToggle()
    }

    closeMenu = () => {
        $(".defy-left").animate({
            left: -800
        }, 500);
        $(".defy-right .transparent").fadeToggle()
    }

    render() {
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            sources: [{
              src: "https://res.cloudinary.com/thisisafrikan-com/video/upload/v1615215774/trailer_cybjk8.mp4",
              type: 'video/mp4'
            }]
          }
        return (
            <div id="defy">

                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />

                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/defy">
                        <a>Defy Odds Adventure</a>
                    </Link></li>
                </ul>
                <div className="content">
                    <div className="defy-left">
                        <a onClick={this.closeMenu} className="close-menu">
                            <ExitButton />
                        </a>
                        <GreenAfricanMask />
                        <ul className="defy-nav">
                            <li id="intro" onClick={() => this.change("intro", "")} className="active"><a >Preamble</a></li>
                            <li id="process" onClick={() => this.change("process","")} ><a >How This Works</a></li>
                            

                            {
                                this.state.signIn ?
                                    this.state.questions?
                                        <Fragment>

                                            <li id="questions" onClick={() => this.change("questions","")}><a >Meet The Oracle</a></li>
                                            {/* <li id="auction" onClick={() => this.change("auction")}><a >Bid now</a></li> */}
                                        </Fragment>
                                        :null :
                                    <Fragment>
                                        {/* <li id="payment" onClick={() => this.change("payment")}><a >Payment</a></li> */}
                                        <li id="registration" onClick={() => this.change("registration","")}><a >Sign Me Up</a></li>
                                    </Fragment>
                            }
                            <li id="trailer" onClick={() => this.change("trailer","")} ><a >Watch Defy Odds Trailer - Long Version</a></li>
                            {/* <li ><a href="https://youtu.be/XqOswz1bzL4" target="video">Watch Defy Odds Trailer - Long Version</a></li> */}
                        </ul>
                    </div>
                    <div className="defy-right">
                        <div onClick={this.closeMenu} className="transparent"></div>
                        <a onClick={this.openMenu} className="mobile-menu">
                            <SquareIcon />
                        </a>
                        {this.state.page == "intro" ?
                            <Intro change={this.change} />
                            :
                            this.state.page == "registration" ?
                                <Registration change={this.change} />
                                :

                                this.state.page == "process" ?
                                    <Process change={this.change} signIn={this.state.signIn} />
                                    :
                                    this.state.page == "examples" ?
                                    <Examples change={this.change} />
                                    :
                                    this.state.page == "trailer" ?
                                    <Trailer { ...videoJsOptions } change={this.change} />
                                    :
                                    this.state.page == "learn-more" ?
                                    <LearnMore change={this.change} />
                                    :
                                    this.state.page == "fun-facts" ?
                                    <FunFacts change={this.change} />
                                    :
                                    this.state.page == "defy-learn-more" ?
                                    <DefyLearnMore change={this.change} />
                                    :
                                    
                                    this.state.signIn ?

                                        this.state.page == "questions" ?
                                            <Questions history={this.props.history} change={this.change} />
                                            :
                                            this.state.page == "auction" ?
                                                <Auction change={this.change} />
                                                :
                                                null

                                        : null
                        }
                    </div>
                </div>
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default Defy
