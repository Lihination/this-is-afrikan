import React, { Component, Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import firebase from './../../services/firebase';
import axios from "axios";
import CustomAlert from './../../utlilities/CustomAlert';
import CustomConfirm from './CustomConfirm';
import EditIcon from './../utilities/EditIcon';
import { toast } from "react-toastify";
import $ from 'jquery';

const users_ref = firebase.firestore().collection("users");

export class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            min: 500,
            minText: "No Offer",
            max: 2000,
            days: 0,
            hours: 0,
            minutes: 0,
            price: 500,
            minPrice: 0,
            maxPrice: 0,
            locked: false,
            section: "bid",
            first_name: "",
            last_name: "",
            phone_number: "",
            shipping_address: "",
            postal_code: "",
            email: "",
            edit: false,
            save: true,
            form: false,
            variantId: "",
            customAlert: false,
            alertText: ""
        }
    }

    save = () => {
        var bool = window.confirm("Are you sure you want to save the information?" )
        if (bool)
        {
            $(".review-section").find(".form-control").addClass("disabled")
            $(".review-section").find("input").attr("disabled", true)
        }
        else{
            console.log("None")
        }
    }

    finish = (e) => {
        const t = this;
        e.preventDefault();
        t.setState({
            customConfirm: true
        })
    }

    edit = (event) => {
        event.preventDefault()
        
        if($(event.target).is('path')){
            var bool = window.confirm("Are you sure you want to edit the "+ $(event.target).parent().parent().parent().parent().parent().parent().text().toLowerCase() + "?" )
            if (bool)
            {
                $(event.target).parent().parent().parent().parent().parent().parent().removeClass("disabled")
                $(event.target).parent().parent().parent().parent().parent().parent().find("input").attr("disabled", false)
                this.setState({
                    edit: true
                })
            }
            else{
                console.log("None")
            }
        }
        else{
            console.log($(event.target).parent().parent().parent().text().toLowerCase())
            var bool = window.confirm("Are you sure you want to edit the "+ $(event.target).parent().parent().parent().text().toLowerCase() + "?" )
            if (bool)
            {
                $(event.target).parent().parent().removeClass("disabled")
                $(event.target).parent().parent().find("input").attr("disabled", false)
                this.setState({
                    edit: true
                })
            }
            else{
                console.log("None")
            }
        }
    }

    componentDidMount(){
        const t = this;
        
    }

    showForm=(e)=> {
        e.preventDefault();
        if(this.state.variantId==""){
            this.openAlert("Please pick a size");
        }else{
            this.setState({
                form: true
            })
        }
    }

    variantClick = (e, i) => {
        console.log(e.target)
        $("#review-sizes li").removeClass("active");
        if($(e.target).prop("tagName") =="A"){
            $(e.target).parent().addClass("active");
        }
        if($(e.target).prop("tagName") =="LI"){
            $(e.target).addClass("active");
        }
        
        this.setState({
            variantId: i
        })
    }

    openAlert = (text)=> {
        this.setState({
            customAlert: !this.state.customAlert,
            alertText: text
        })
    }
    
    accept = () => {
        const t = this;
        t.setState({
            customConfirm: false
        })
        
    }

    handleToken = async (token, addresses) => {
        const t = this;
        
        t.setState({
            customConfirm: false
        });
        // var userid = firebase.auth().currentUser.uid;
        const bid = this.state.maxPrice;
        const { shipping_information, first_name, confirm_password,
            last_name, phone_number, postal_code,email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.input.password).then((data) => {
                
            users_ref.add({
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone_number,
                postal_code: postal_code,
                bid: bid,
                haveBid: true,
                token: token.id,
                paymentid: null,
                user: data.user.uid
            })
        })
        .then(async ()=>{
            toast("Success! Check email for details", { type: "success" });
            const response = await axios.post(
                "https://headerng.herokuapp.com/https://bjorn-stripe.herokuapp.com/alt_bid_checkout",
                { token,bid, shipping_information, first_name, confirm_password,
                    last_name, phone_number, postal_code,email, password}
            );
            const { status,error } = response.data;
            console.log("Response:", response.data);
            if (status === "success") {
                // t.props.changeSection(0);
                // this.setState({
                //     section: "review"
                // })
                t.props.history.history.goBack();
            }
            else {
                // console.log(error)
                this.setState({
                    alertText: error.decline_code
                }, ()=>{
                    t.setState({
                        customAlert: !this.state.customAlert,
                    })
                })
            }
        })
        .catch((error)=> {
            console.log(error)
            this.setState({
                alertText: "Something went wrong"
            }, ()=>{
                t.setState({
                    customAlert: !this.state.customAlert,
                })
            })
        })
        

        
    }

    addtoCart = () => {
        if(this.state.variantId==""){
            alert("Please pick a size")
        }else
            this.props.addVariantToCart(this.state.variantId, this.state.quantity)
    }

    openConfirm = () => {
        this.setState({
            customConfirm: false
        })
    }

    handleChange = (e,val) => {
        
        if(val==600)
        {
            
            this.setState({ maxPrice: 0,
                minPrice: 0, minText: "No Offer" });
            $(".lock-btn").addClass("disabled")
        }
        else
        {
            this.setState({ maxPrice: val,
                minPrice: 0 });
            $(".lock-btn").removeClass("disabled")
        }
        
      }

      textChange = (event) => {

      }

      componentDidMount() {
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("May 1, 2021").getTime();
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
            // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(days)
            // Display the result in the element with id="demo"
            // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
            t.setState({
                days: days,
                hours: hours,
                minutes: minutes
            })
          
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
            //   document.getElementById("demo").innerHTML = "EXPIRED";
                t.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0
                })
            }
          }, 1000);
        
    }

    lock = () => {
        if(this.state.maxPrice)
            this.setState({
                locked: true
            }, ()=> {
                $(".checkout-btn").removeClass("disabled")
                $(".lock-btn").addClass("disabled")
            })
    }

    clear = () => {
        this.setState({
            maxPrice: 0,
            locked: false
        }, ()=> {
            $(".checkout-btn").addClass("disabled")
            $(".lock-btn").removeClass("disabled")
        })
    }

    checkout = () => {
        if(this.state.locked){
             
           
                this.setState({
                    section: "review"
                })
            
        }
        else{
            alert("Please pick a bid.")
        }
    }

    render() {
        var product= {};
        let variantImage = {};
        let variants = [];
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string); 
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("id");
        
            if(this.props.products.length!=0)
            {
                product = this.props.products.filter((x,i)=>{
                    return x.id == c
                })[0]
            }
            variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        if(product!=undefined){
            variants = product.variants
        }
        console.log(variantImage)
        return (
            <Fragment>
                {
                    this.state.customAlert ? <CustomAlert closePopup={this.openAlert}>
                                        <h4>{this.state.alertText}</h4>
                                    </CustomAlert>: null
                }

                {
                    this.state.customConfirm ? <CustomConfirm handleToken={this.handleToken} postal_code={this.state.postal_code} shipping_address={this.state.shipping_address} email={this.state.email} bid={this.props.bid} closePopup={this.openConfirm} accept={this.accept}>
                                        <h4>Are you sure all the information is correct?</h4>
                                    </CustomConfirm>: null
                }

            <div className="content">
                <div className="background"></div>
                {
                    this.state.section=="bid"?
                    <div className="bid-section">
                        <div className="wrapper">
                            {/* <h1>The coiled python shoes</h1> */}
                            <h4>
                                We’ve developed an auction process to match you with the <b><i>one pair of shoes we designed uniquely for your personality.</i></b> Here's how it works:
                                <ol>
                                    <li>Make a bid offer by moving the slider dial below to an amount of your choice. Offers must be made before the auction date count down expires.</li>
                                    <li>Bid offers can be changed or withdrawn at any time until you lock and confirm your bid through the check out process. 
                                    </li>
                                    <li>On the auction date, we'll notify you via email if your offer is accepted; you'll be billed at that time only and your shoes will immediately be sent to you. If your offer is not accepted, you won't be charged for anything.
                                    </li>
                                </ol>
                            </h4>
                            <div className="countdown">
                                <h2>Countdown To Auction:</h2>
                                <ul>
                                    <li>
                                        <div className="value">
                                            <h1>{this.state.days}</h1>
                                        </div>
                                        <p>Days</p>
                                    </li>

                                    <li>
                                        <div className="value">
                                            <h1>{this.state.hours}</h1>
                                        </div>
                                        <p>Hours</p>
                                    </li>

                                    <li>
                                        <div className="value">
                                            <h1>{this.state.minutes}</h1>
                                        </div>
                                        <p>Minutes</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="prices">
                                <div className="left">
                                    <p>{this.state.minText}</p>
                                    <h3><span>$</span>{this.state.minPrice}</h3>
                                </div>        
                                
                                <div className="slider">
                                    <PrettoSlider value={this.state.maxPrice} disabled={this.state.locked}  onChange={(e, val)=>this.handleChange(e, val)} min={this.state.min} max={this.state.max} step={50} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                                </div>
                                <div className="right">
                                    <p>Your Offer</p>
                                    <div className="price">
                                        <span>$</span>
                                        {/* {this.state.maxPrice} */}
                                        <input onChange={(e)=>this.setState({
                                            maxPrice: e.target.value
                                        })} value={this.state.maxPrice} type="text"/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="buttons">
                                <a href="#" onClick={(e)=> { e.preventDefault(); this.clear() }} className="btn btn-black">Clear</a>
                                <a onClick={()=> {this.lock() }} className="btn btn-black lock-btn disabled">Lock bid</a>
                                <a  onClick={()=> {this.checkout()  }} className="btn btn-black disabled checkout-btn">Checkout Process</a>
                            </div>
                        </div>
                    </div>
                    : 
                    <div className="review-section">
                        <div className="wrapper">
                            <div className="answer-in-review">
                                <p>Your bid</p>
                                <div className="price">
                                    <span>${this.state.maxPrice}</span>
                                </div>
                            </div>
                            {
                                this.state.form?
                                <div className="top">
                                <h1>Personal information</h1>
                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="first_name">First name</label>
                                        <div className="form-control">
                                            <input  value={this.state.first_name} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    first_name: event.target.value
                                                })} name="first_name" id="first_name" />
                                            
                                        </div>
                                        
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name">Last name</label>
                                        <div className="form-control">
                                            <input  value={this.state.last_name} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    last_name: event.target.value
                                                })} name="last_name" id="last_name" />
                                            
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone number</label>
                                        <div className="form-control">
                                            <input  value={this.state.phone_number} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    phone_number: event.target.value
                                                })} name="phone_number" id="phone_number" />
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="form-control">
                                            <input  value={this.state.email} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    email: event.target.value
                                                })} name="email" id="email" />
                                            
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <div className="form-control">
                                            <input  value={this.state.password} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    password: event.target.value
                                                })} name="password" id="password" />
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Confirm Password</label>
                                        <div className="form-control">
                                            <input  value={this.state.confirm_password} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(event)=>this.setState({
                                                    confirm_password: event.target.value
                                                })} name="confirm_password" id="confirm_password" />
                                            
                                        </div>
                                        
                                    </div>
                                </div>

                                <h1>Shipping information</h1>
                                <div className="row">
                                    <div className="form-group">
                                        <label htmlFor="shipping_address">Shipping address</label>
                                        <div className="form-control">
                                            <input  value={this.state.shipping_address} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(value)=>this.setState({
                                                    shipping_address: value
                                                })} name="shipping_address" id="shipping_address" />
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="postal_code">Postal code</label>
                                        <div className="form-control">
                                            <input  value={this.state.postal_code} 
                                                type="text" 
                                                disabled={false}
                                                onChange={(value)=>this.setState({
                                                    postal_code: value
                                                })} name="postal_code" id="postal_code" />
                                                
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            : <div className="sizes-body">
                                <h4>Select your size</h4>
                                <ul id="review-sizes" className="sizes">
                                
                                { 
                                            variants == undefined?
                                                null :
                                                    variants.map((x,i)=> (
                                                <li><a onClick={(e) => {e.preventDefault();this.variantClick(e, x.id)}}>{x.title}</a></li>
                                                ))
                                            }
                                                    {/* <li><a >40</a></li>
                                                    <li><a >41</a></li>
                                                    <li><a >42</a></li>
                                                    <li className="active"><a >43</a></li>
                                                    <li><a >44</a></li>
                                                    <li><a >45</a></li> */}
                                                    {/* <li onClick={this.showForm}><a>&#10003;</a></li> */}
                                    </ul>
                            </div>
                            }
                            
                            <div className="buttons">
                                {
                                    this.state.edit? <a href="#" onClick={(e)=> { this.save(e)  }} className="btn btn-black">Save Information</a>
                                    : this.state.form? <a href="#" onClick={(e)=> { this.finish(e)  }} className="btn btn-black">Finalize And Checkout</a>: <a href="#" onClick={(e)=> { this.showForm(e)  }} className="btn btn-black">Next</a>
                                }
                            </div> 
                        </div>
                    </div>
                }

            </div>
            </Fragment>
        )
    }
}

export default Content;

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: "100%"
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#fff',
        },
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);