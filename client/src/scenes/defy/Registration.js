import React, { Component, Fragment } from 'react';
import firebase from './../../services/firebase';
import Overlay from './../_layout/Overlay';

import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import CustomAlert from './../../utlilities/CustomAlert';
import GoogleIcon from './../utilities/GoogleIcon';
import FacebookIcon from './../utilities/FacebookIcon';
import TwitterIcon from './../utilities/TwitterIcon';
// import { request } from 'express';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render. 

const users_ref = firebase.firestore().collection("users");
const facebookprovider = new  firebase.auth.FacebookAuthProvider();
const twitterprovider = new firebase.auth.TwitterAuthProvider();
const googleprovider = new firebase.auth.GoogleAuthProvider();

const errors_list={
    "first_name": "Please enter your first name.",
    "last_name": "Please enter your last name.",
    "email": "Please enter a valid email",
    "phone": "Please enter a valid phone",
    "password": "Please add a strong password",
    "address": "Please add your address",
    "gender": "Please pick a gender",
}////

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // first_name: '',
            // last_name: "",
            // email: "",
            // phone: "",
            // gender: "",
            // address: "",
            // password: "",
            // marital: "",
            // dob: "",
            // income: "",
            // ethnicity: "",
            // confirm_password: "",
            input: {},
            errors: {},
            loading: false,
            cardPay: false,
            allowRegister: false,
            openAlert: false,
        }
    }

    pay = () => {
        this.setState({
            cardPay: true
        })
    }

    handleChange = (event) => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        // console.log(event.target.name)
        

        this.setState({
          input,
        //   allowRegister: true
        });
        // this.validate();
    }

    change = () => {
        this.props.change("payment");
    }



    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        this.setState({
            allowRegister: true
        })
    
        if (input["first_name"] == "") {
          isValid = false;
          errors["first_name"] = "Please enter your first name.";
        }

        if (input["last_name"] == "") {
            isValid = false;
            errors["last_name"] = "Please enter your last name.";
          }
    
        if (input["email"] == "") {
          isValid = false;
          errors["email"] = "Please enter your email address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["password"]) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }
    
        if (!input["confirm_password"]) {
          isValid = false;
          errors["confirm_password"] = "Please enter your confirm password.";
        }
    
        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
          if (input["password"] != input["confirm_password"]) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          }
        } 
    
        this.setState({
          errors: errors
        });
    
        if(isValid){
            this.setState({
                allowRegister: true
            })
        }
    }

    componentDidUpdate(){
        // console.log(this.state.allowRegister)
    }

    openAlert = (text)=> {
        this.setState({
            customAlert: !this.state.customAlert,
            alertText: text
        })
    }

    signUpwithTwitter = () => {
        const t = this;
            const input = this.state.input;
            // t.setState({
            //     loading: true
            // })
      firebase
          .auth()
          .signInWithPopup(twitterprovider)
          .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          users_ref.add({
            first_name: input["first_name"],
            last_name: input["last_name"],
            email: input["email"],
            phone: input["phone"],
            haveBid: false,
            user: user.uid
        })
        .then(()=>{
            this.props.change("questions");
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
          console.log(error)
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
      
          // ...
          });
    }

    signUpwithFacebook = () => {
        const t = this;
            const input = this.state.input;
            // t.setState({
            //     loading: true
            // })
      firebase
          .auth()
          .signInWithPopup(facebookprovider)
          .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          users_ref.add({
            first_name: input["first_name"],
            last_name: input["last_name"],
            email: input["email"],
            phone: input["phone"],
            // education: input["education"]== undefined? null: input["education"],
            // occupation: input["occupation"]== undefined? null: input["occupation"],
            // gender: input["gender"],
            // address: input["address"] + " "+input["address1"],
            // age: input["age"]== undefined? null: input["age"],
            // race: input["race"]== undefined? null: input["race"],
            // income: input["income"]== undefined? null: input["income"],
            // ethnicity: input["ethnicity"],

            haveBid: false,
            // token: token.id,
            // paymentid: null,
            user: user.uid
        })
        .then(()=>{
            this.props.change("questions");
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
          console.log(error)
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
      
          // ...
          });
    }

    signUpwithGoogle = () => {
        const t = this;
        
            const input = this.state.input;
            // t.setState({
            //     loading: true
            // })
      firebase
          .auth()
          .signInWithPopup(googleprovider)
          .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // The signed-in user info.
          var user = result.user;
          users_ref.add({
                        first_name: input["first_name"],
                        last_name: input["last_name"],
                        email: input["email"],
                        phone: input["phone"],
                        // education: input["education"]== undefined? null: input["education"],
                        // occupation: input["occupation"]== undefined? null: input["occupation"],
                        // gender: input["gender"],
                        // address: input["address"] + " "+input["address1"],
                        // age: input["age"]== undefined? null: input["age"],
                        // race: input["race"]== undefined? null: input["race"],
                        // income: input["income"]== undefined? null: input["income"],
                        // ethnicity: input["ethnicity"],
    
                        haveBid: false,
                        // token: token.id,
                        // paymentid: null,
                        user: user.uid
                    })
                    .then(()=>{
                        this.props.change("questions");
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
          console.log(error)
          // ...
          });
    }

    handleToken = async (token, addresses) => {
        console.log(token)
        var product = {
            name: "Defy Odds Adventure",
            price: 5,
            m: "This is all you need to pay to go on an adventure, the Defy Odds Adventure"
        }

        // if (this.validate()) {
            const t = this;
            const input = this.state.input;
            t.setState({
                loading: true
            })
            
            // toast("Success! Check email for details", { type: "success" });
            
            firebase.auth().createUserWithEmailAndPassword(this.state.input.email, this.state.input.password).then((data) => {
                
                users_ref.add({
                    first_name: input["first_name"],
                    last_name: input["last_name"],
                    email: input["email"],
                    phone: input["phone"],
                    education: input["education"]== undefined? null: input["education"],
                    occupation: input["occupation"]== undefined? null: input["occupation"],
                    gender: input["gender"],
                    address: input["address"] + " "+input["address1"],
                    age: input["age"]== undefined? null: input["age"],
                    race: input["race"]== undefined? null: input["race"],
                    income: input["income"]== undefined? null: input["income"],
                    // ethnicity: input["ethnicity"],

                    haveBid: false,
                    
                    user: data.user.uid
                }).then(() => {
                    this.props.change("questions");
                    // var userid = data.user.uid;
                    // const response = await axios.post(
                    //     "https://headerng.herokuapp.com/https://bjorn-stripe.herokuapp.com/register_checkout",
                    //     { token, product, userid }
                    // );
                    // const { status, error } = response.data;
                    // console.log("Response:", response.data);
                    // if (status === "success") {
                    //     this.props.change("questions");
                    // }
                    // else {
                    //     if(error.decline_code=="insufficient_funds")
                    //         t.openAlert("Insufficient funds")
                    //     else
                    //         t.openAlert("Something went wrong")
                    //     // toast("Something went wrong", { type: "error" });
                    // }
                })
        })
        .catch((error) => {
            t.setState({
                loading: false
            }, () => {
                console.log(error)
                // if(error.decline_code=="insufficient_funds")
                //             t.openAlert("Insufficient funds")
                //         else
                //             t.openAlert("Something went wrong")
            })
        }) 
    
        //
    
        // else {
        //     toast("Passwords don't match", {type: 'error'})
        // }
    }

    onOpened = () => {
        // console.log("test");
    }

    openAlert = (text)=> {
        this.setState({
            customAlert: !this.state.customAlert,
            alertText: text
        })
    }

    onFocusOut = (e) => {
        let input = this.state.input;
        console.log(input["address"]);
        let errors = this.state.errors;
        let isValid = true;
        const t = this;

        
        if (!input["first_name"]) {
                // console.log("ss")
                isValid = false;
                errors["first_name"] = errors_list["first_name"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                // console.log(isValid)
                errors["first_name"] = "";
            }
        
            if (!input["last_name"]) {
                // console.log("ss")
                isValid = false;
                errors["last_name"] = errors_list["last_name"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["last_name"] = "";
            }

            if (!input["email"]) {
                // console.log("ss")
                isValid = false;
                errors["email"] = errors_list["email"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["email"] = "";
            }

            if (!input["phone"]) {
                // console.log("ss")
                isValid = false;
                errors["phone"] = errors_list["phone"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["phone"] = "";
            }

            if (!input["confirm_password"]) {
                // console.log("ss")
                isValid = false;
                errors["confirm_password"] = errors_list["confirm_password"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["confirm_password"] = "";
            }

            // if (!input["address"]) {
            //     console.log(input["address"])
            //     isValid = false;
            //     errors["address"] = errors_list["address"];

            //     // this.setState({
            //     //     allowRegister: false
            //     // })
            // } else{
            //     errors["address"] = "";
            // }

            if (!input["password"]) {
                // console.log("ss")
                isValid = false;
                errors["password"] = errors_list["password"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["password"] = "";
            }

            if (!input["confirm_password"]) {
                // console.log("ss")
                isValid = false;
                errors["confirm_password"] = errors_list["confirm_password"];

                // this.setState({
                //     allowRegister: false
                // })
            } else{
                errors["confirm_password"] = "";
            }

            // console.log(input["gender"])
            // if (input["gender"]=="0" || !input["gender"]) {
            //     // console.log("ss")
            //     isValid = false;
            //     errors["gender"] = errors_list["gender"];

            //     // this.setState({
            //     //     allowRegister: false
            //     // })
            // } else{
            //     errors["gender"] = "";
            // }
            

        if (typeof input["email"] !== "undefined") {
            
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
                // this.setState({
                //     allowRegister: false
                // })
            }
            else{
                errors["email"] = "";
                var exists = false;
                users_ref.where("email","==", input["email"])
                .get()
                .then(query=> {
                    if(query){
                        query.forEach(doc=> {
                            console.log("exists");
                            errors["email"] = "This email is already used";
                            exists=true;
                            t.setState({
                                errors: errors,
                                allowRegister: false,
                            })
                            isValid=false;
                        })
                        
                    }
                })
                

            }
        }
        console.log(isValid)

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
                // this.setState({
                //     allowRegister: false
                // })
            }
            else{
                errors["confirm_password"] = "";
            }
        } 
        
        
        this.setState({
            errors: errors,
            allowRegister: isValid
        })
    }

    render() {
        return (
            <Fragment>
            {
                this.state.customAlert ? <CustomAlert closePopup={this.openAlert}>
                    <h4>{this.state.alertText}</h4>
                </CustomAlert>: null
            }
            
            <div className="registration">
                
                <Overlay loading={this.state.loading} />

                <div className="inner">
                    <div className="top">
                        <div className="row-line image">
                        <img src={"https://res.cloudinary.com/bjornbassey/image/upload/v1613750164/logo_white_qbthgc.png"} alt="afrikan" />
                        </div>
                        
                        <div className="row-line border">
                            <h1>THIS IS AFRIKAN USER REGISTRATION FORM</h1>
                            <p>Please ensure that all the relevant fields are filled. Some are required for registration but endeavour to complete the other fields. </p>
                            <p className="red">* Required</p>
                        </div>

                        <div className="forms">
                            <form className="left">
                            <h2>Personal Information</h2>
                                <div className="row">
                                    
                                    <div className="form-group">
                                        <label htmlFor="first-name">First name <span className="red">*</span></label>
                                        <input value={this.state.input.first_name} onBlur={(e)=>{this.onFocusOut(e)}} onChange={this.handleChange} type="text" name="first_name" id="first_name" />
                                        <p className="error-text">{this.state.errors["first_name"]}</p>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last-name">Last name <span className="red">*</span></label>
                                        <input value={this.state.input.last_name} onBlur={(e)=>{this.onFocusOut(e)}} onChange={this.handleChange} type="text" name="last_name" id="last_name" />
                                        <p className="error-text">{this.state.errors["last_name"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="email">Email address <span className="red">*</span></label>
                                        <input type="text" value={this.state.input.email} onBlur={(e)=>{this.onFocusOut(e)}} onChange={this.handleChange} name="email" id="email" />
                                        <p className="error-text">{this.state.errors["email"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="phone">Phone number <span className="red">*</span></label>
                                        <input value={this.state.input.phone} onBlur={(e)=>{this.onFocusOut(e)}} onChange={this.handleChange} type="text" name="phone" id="phone" />
                                        <p className="error-text">{this.state.errors["phone"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="password">Password <span className="red">*</span></label>
                                        <input value={this.state.input.password} onBlur={(e)=>{this.onFocusOut(e)}} onChange={this.handleChange} type="password" name="password" id="password" />
                                        <p className="error-text">{this.state.errors["password"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="confrim_password">Confirm Password <span className="red">*</span></label>
                                        <input value={this.state.input.confirm_password} onChange={this.handleChange}
                                            type="password" name="confirm_password" id="confirm_password" />
                                        {/* <textarea rows={3} value={this.state.input.confirm_password} onChange={this.handleChange}
                                            type="password" name="confirm_password" id="confirm_password">
                                        </textarea> */}
                                        <p className="error-text">{this.state.errors["comfirm_password"]}</p>
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="address">Address <span className="red">*</span></label>
                                        <textarea rows={1} value={this.state.input.address} onChange={this.handleChange}
                                             name="address" id="address" onBlur={(e)=>{this.onFocusOut(e)}} >
                                        </textarea>
                                        <textarea style={{
                                            marginTop: 10
                                        }} rows={1} value={this.state.input.address} onChange={this.handleChange}
                                             name="address1" id="address1" onBlur={(e)=>{this.onFocusOut(e)}} >
                                        </textarea>
                                        <p className="error-text">{this.state.errors["address"]}</p>
                                    </div>
                                </div> */}

                                {/* <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="hobbies">Hobbies</label>
                                        <input type="text" value={this.state.input.hobbies} onChange={this.handleChange} name="hobbies" id="hobbies" />
                                        <p className="error-text">{this.state.errors["hobbies"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="shows">Favorite TV show</label>
                                        <input type="text" value={this.state.input.shows} onChange={this.handleChange} name="hobbies" id="shows" />
                                        <p className="error-text">{this.state.errors["shows"]}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-single">
                                        <label htmlFor="movies">Favorite movies</label>
                                        <input type="text" value={this.state.input.movies} onChange={this.handleChange} name="movies" id="movies" />
                                        <p className="error-text">{this.state.errors["movies"]}</p>
                                    </div>
                                </div> */}
                            </form>

                            {/* <div className="line"></div> */}

                            
                        </div>

                    </div>
                    
                    <div className="bottom">
                        {/* <button onClick={this.register} className="btn btn-black">Pay And Register</button> */}
                        <button onClick={this.handleToken} disabled={!this.state.allowRegister} className={`btn btn-black ${this.state.allowRegister? "": "btn-disabled"}`}>Register</button>
                        {/* <StripeCheckout
                            stripeKey="pk_live_51Hrf8RAQYzYsOqBDWUt9iT0vKrcV5GLGQrauy9SzaVNz8nb4V4rGc8X3J0tHf8BKCTlVJg172UmTOoaTTud6UNOm00pTfeglNk"
                            token={this.handleToken}
                            amount={parseInt(4.99 * 100)}
                            name="Defy Odds Adventure"
                            opened={this.onOpened}
                            // billingAddress
                            // shippingAddress
                            
                            email={this.state.input.email}
                        >
                            <button disabled={!this.state.allowRegister} className={`btn btn-black ${this.state.allowRegister? "": "btn-disabled"}`}>Pay with card</button>
                        </StripeCheckout> */}
                    </div>

                    <p className="or" style={{fontWeight: "bold"}}>Or</p>

                    <div className="social">
                        <a onClick={!this.state.allowRegister? null: this.signUpwithFacebook} disabled={!this.state.allowRegister} className={`btn btn-facebook ${this.state.allowRegister? "": "btn-disabled"}`}><FacebookIcon /> Sign in with facebook</a>
                        <a onClick={!this.state.allowRegister? null: this.signUpwithTwitter} disabled={!this.state.allowRegister} className={`btn btn-twitter ${this.state.allowRegister? "": "btn-disabled"}`}><TwitterIcon /> Sign in with twitter</a>
                        {/* <a onClick={!this.state.allowRegister? null:this.signUpwithGoogle} disabled={!this.state.allowRegister} className={`btn btn-google ${this.state.allowRegister? "": "btn-disabled"}`}><GoogleIcon /> Sign in with google</a> */}
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Registration
