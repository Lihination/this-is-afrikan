import React, { Component } from 'react';
import FrontNav from './../_layout/FrontNav';
import Topper from '../_layout/Topper';
import Footer from '../_layout/Footer';
import Oracle from './../_layout/Oracle';
import Cart from './../_layout/Cart';
import Cookie from './../_layout/Cookie';
import Bottom from './../_layout/Bottom';
import Overlay from './../_layout/Overlay';
import $ from 'jquery';
import './login.scss';
import { Link, useHistory } from 'react-router-dom';
import Reset from './Reset';
import Confirm from './Confirm';
// import login_back from './../../images/login_back.png';
import firebase from './../../services/firebase';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GoogleIcon from './../utilities/GoogleIcon';
import FacebookIcon from './../utilities/FacebookIcon';
// import './home.module.scss';
import Client from 'shopify-buy';

import { refreshTokenSetup } from '../utilities/refreshToken';

const clientId =
  '1097131982454-7ekf6hq4j6b6jie2v78c30un54202ntt.apps.googleusercontent.com';

const users_ref = firebase.firestore().collection("users");
const facebookprovider = new  firebase.auth.FacebookAuthProvider();

const googleprovider = new firebase.auth.GoogleAuthProvider();

export class Login extends Component {
    constructor(props) {
        super(props);
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string); 
        // console.log(window.location.href)
        // 
        var action = url.searchParams.get("mode");
        var oobCode = url.searchParams.get("oobCode");
        this.state = {
            email: '',
            password: '',
            loading: false,
            login: true,
            oobCode: oobCode,
            action: action==undefined? "form": "reset",
            message: ""
        }
    }

    componentDidMount() {
        document.title = "Login";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
        // console.log("this.props.")

    }

    

    login = () => {
        const t = this;
        t.setState({
            loading: true
        })
        // const history = useHistory();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(function (data) {
                users_ref.where("user", "==", data.user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=> {
                        const { answer } = doc.data();
                        if(answer){
                            t.props.history.history.push({ pathname: "/dashboard" })
                        }
                        else{
                            t.props.history.history.push({ pathname: "/defy" })
                        }
                    })
                })
                
            })
            .catch(() => {
                t.setState({
                    loading: false
                }, () => {
                    alert("Login failed. Please try again.")
                })
            })
        
    }

    forgotPassword = () => {
        // firebase.auth().sendPasswordResetEmail
    }

    changeSection = () => {
        this.setState({
            login: !this.state.login,
            message: ""
        })
    }

    changeAction = () => {
        this.setState({
            action: "form",
            message: "Password reset."
        })
    }

    onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
      };
    
      onFailure = (res) => {
        console.log('Login failed: res:', res);
        // alert(
        //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
      };

    responseFacebook = (response) => {
        console.log(response);
        // setData(response);
        // setPicture(response.picture.data.url);
        if (response.accessToken) {
        //   setLogin(true);
        } else {
        //   setLogin(false);
        }
      }

      signInwithFacebook = () => {
          const t = this;
        firebase
            .auth()
            .signInWithPopup(facebookprovider)
            .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // The signed-in user info.
            var user = result.user;
            users_ref.where("user", "==", user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=> {
                        const { answer } = doc.data();
                        if(answer){
                            t.props.history.history.push({ pathname: "/dashboard" })
                        }
                        else{
                            t.props.history.history.push({ pathname: "/defy" })
                        }
                    })
                })
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            console.log("facebook:" + user);
            // ...
            })
            .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        
            // ...
            });
      }

      signInwithGoogle = () => {
          const t = this;
        firebase
            .auth()
            .signInWithPopup(googleprovider)
            .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // The signed-in user info.
            var user = result.user;
            users_ref.where("user", "==", user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=> {
                        const { answer } = doc.data();
                        if(answer){
                            t.props.history.history.push({ pathname: "/dashboard" })
                        }
                        else{
                            t.props.history.history.push({ pathname: "/defy" })
                        }
                    })
                })
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
            console.log(user);
            // ...
            })
            .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        
            // ...
            });
      }

    render() {
        return (
            <div id="login">
                <Overlay loading={this.state.loading} />
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} />
                <div className="content">
                    <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215769/login_back_dyuldk.png"} alt=""/>
                    <div className="right">
                    <div className="square">
                        <div className="square_2">
                            <div className="square_3">

                        
                    {
                        this.state.action=="reset"?
                            <Confirm changeAction={this.changeAction} code={this.state.oobCode} />
                        :
                        this.state.login?
                        <div className="form">
                        {
                            this.state.message==""? null:
                            <p className="message">{this.state.message}</p>
                        }
                         {/* <p className="message">Password updated.</p> */}
                        <h1>Login to your account</h1>
                        
                        <form>
                            <div className="social">
                                <a onClick={this.signInwithFacebook} className="btn btn-facebook"><FacebookIcon /> Sign in with facebook</a>
                                <a onClick={this.signInwithGoogle} className="btn btn-google"><GoogleIcon /> Sign in with google</a>
                            </div>
                            <div className="row">
                                <div className="form-single">
                                    <label htmlFor="email">Email</label>
                                    <input value={this.state.email} onChange={(x) => this.setState({ email: x.target.value })} type="text" name="email" id="email" />
                                 </div>
                            </div>

                            <div className="row">
                                <div className="form-single">
                                    <label htmlFor="password">Password</label>
                                    <input value={this.state.password} onChange={(x) => this.setState({ password: x.target.value })} type="password" name="password" id="password" />
                                </div>
                            </div>

                            <div className="bottom">
                                <a className="btn btn-black" onClick={this.login}>Login</a>

                                <div className="options">
                                    <p> <Link to={{
                                        pathname: "/defy",
                                        state: { page: "registration" }
                                    }}>Register here</Link></p>

                                    <a className="fg-password" onClick={this.changeSection}>
                                        Forgot password?
                                    </a>
                                </div>
                               
                                    
                            
                            </div>
                        </form>
                    </div>

                        :
                        <Reset changeSection={this.changeSection}/>
                        
                    }
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default Login;
