import React, { Component, Fragment } from 'react';
import FacebookLogo from './../utilities/FacebookLogo';
import TwitterLogo from '../utilities/TwitterLogo';
import InstagramLogo from '../utilities/InstagramLogo';
import PackageLogo from '../utilities/PackageLogo';
import ShoppingbagLogo from '../utilities/ShoppingbagLogo';
import AccountLogo from '../utilities/AccountLogo';
import HamburgerIcon from '../utilities/HamburgerIcon';
import UserDropDown from './UserDropDown';
import { Link } from 'react-router-dom';
// import logo from './../../images/logo_black.png';
import Overlay from './Overlay';
import DashboardIcon from './../utilities/DashboardIcon';
import ExitIcon from './../utilities/ExitIcon';
import Cart from './Cart';

import $ from 'jquery';
// import { container } from './home.module.scss';
import firebase from './../../services/firebase';
const user_ref = firebase.firestore().collection("users");
export class Topper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signIn: false,
            loading: false,
            hours: 0,
            days: 0,
            minutes: 0,
            seconds: 0,
            firstname: "",
            lastname: ""
        }

        this.options = {
            data: [
                <Fragment></Fragment>
            ]
        }
    }

    componentDidMount() {
        const t = this;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    signIn: true
                })
                user_ref.where("user", "==", user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=>{
                        const { first_name, last_name} = doc.data();
                        t.setState({
                            firstname: first_name,
                            lastname: last_name
                        });
                    })
                })
            }
            else {
                this.setState({
                    signIn: false
                })
            }
        })

        // var now = new Date();
        var countDownDate = new Date("Feb 28, 2021").getTime();
        // console.log(now.getDay());
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(days)
            // Display the result in the element with id="demo"
            // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
            t.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
          
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
            //   document.getElementById("demo").innerHTML = "EXPIRED";
                t.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
          }, 1000);
    }

    logout = () => {
        const t = this;
        t.setState({
            loading: true
        })
        firebase.auth().signOut()
            .then(() => {
                t.setState({
                    loading: false
                }, ()=> {
                    t.props.history.history.push({ pathname: "/home" })
                })
            })
            .catch(() => {
                t.setState({
                    loading: false
                })
            })
        
    }

    dropDown=()=> {
        $(".topper .menu-dropdown").slideToggle();
    }
    
    openDashboard = () => {
        const t = this;
        user_ref.where("user", "==", firebase.auth().currentUser.uid)
        .get()
        .then(query=> {
            query.forEach((doc)=>{
                const { answer } = doc.data();
                if(answer){
                    t.props.history.history.push({ pathname: "/dashboard" })
                }
                else{
                    t.props.history.history.push({ pathname: "/defy" })
                }
            })
        })
        
    }
    render() {
        return (
            <Fragment>
                <Overlay loading={this.state.loading} />
                <div className="topper">
                    <div className="container">
                        <ul className="left">
                            <a target="facebook" href="https://www.facebook.com/profile.php?id=100002082594092"><FacebookLogo /></a>
                            <a target="twitter" href="https://twitter.com/thisisafrikan?s=20"><TwitterLogo /></a>
                            <a target="instagram" href="https://www.instagram.com/thisisafrikan/"><InstagramLogo /></a>

                            
                        </ul>
{/* /// */}
                        <div className="logo">
                            <Link to="/home"> 
                                <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215758/logo_black_pwxtmx.png"} alt="afrikaan" />
                            </Link>
                        </div>
                        <a onClick={this.dropDown} className="mobile-right">
                            <HamburgerIcon />
                        </a>
                        <ul className="menu-dropdown">
                        {
                                this.state.signIn ? <Fragment>
                                    <li>
                                        <span>
                                        {
                                            this.state.firstname[0] == undefined? "": " "+this.state.firstname
                                        }, defy odds!
                                        </span>
                                    </li>
                                    <li><a onClick={()=> {this.openDashboard()}}><DashboardIcon />My Dashboard</a></li>
                                    <li><a onClick={() => this.logout()}><ExitIcon />Logout</a></li>
                                </Fragment>
                                    :
                                    <li>
                                        <Link to={{ pathname: 'login' }}>
                                            <AccountLogo />Sign In
                                        </Link>
                                    </li>
                            }
                            <li><a target="track" href="https://mydhl.express.dhl/ng/en/tracking.html#/track-by-number" onClick={(e) => {}}><PackageLogo />Track my order</a> </li>
                            <li><a onClick={() => this.props.openCart()} href="#"><ShoppingbagLogo />Shopping bag</a> </li>
                            
                        </ul>
                        <ul className="right">
                            <li><a target="track" href="https://mydhl.express.dhl/ng/en/tracking.html#/track-by-number" onClick={(e) => {}}><PackageLogo />Track my order</a> </li>
                            <li><a onClick={() => this.props.openCart()} href="#"><ShoppingbagLogo />Shopping bag</a> </li>
                            {
                                this.state.signIn ? <Fragment>
                                    <UserDropDown history={this.props.history} />
                                </Fragment>
                                    :
                                    <li>
                                        <Link to={{ pathname: 'login' }}>
                                            <AccountLogo />Sign In
                                        </Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Topper;
