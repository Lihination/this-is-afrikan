import React, { Component, Fragment } from 'react'
import firebase from './../../services/firebase';
import axios from "axios";
import CustomAlert from './../../utlilities/CustomAlert';
import CustomConfirm from './CustomConfirm';
import EditIcon from './../utilities/EditIcon';
import { toast } from "react-toastify";
import $, { get } from 'jquery';
const user_ref = firebase.firestore().collection("users");
export class ReviewSection extends Component {
    constructor(props){
        super(props);
        this.state={
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
        // var bool = window.confirm("Are you sure all the information is correct?" )
        // if(bool){
        //     user_ref.where("user", "==", firebase.auth().currentUser.uid)
        //     .get().then(query=> {
        //         query.forEach(doc=> {
        //             user_ref.doc(doc.id)
        //                 .update({
        //                     bid: t.props.bid,
        //                     haveBid: true,
        //                 })
        //         })
                
        //     })
        //     t.props.changeSection(0);
        // }
        // else{

        // }
    }

    edit = (event) => {
        event.preventDefault()
        console.log($(event.target).is('path'))
        console.log($(event.target))
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
        firebase.auth().onAuthStateChanged((user) => {
            user_ref.where("user", "==", user.uid)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((doc)=>{
                        const {first_name, last_name, phone, email} = doc.data();
                        t.setState({
                            first_name: first_name,
                            last_name: last_name,
                            phone_number: phone,
                            email: email
                        })
                    })

                    // var i = 0;
                    // var txt = this.props.bid==0? "Your bid has not been decided.": "Your bid is $"+this.props.bid;
                    // var length = txt.length;
                    // setTimeout(()=>{
                    //     setTimeout(function loop() {
                    //         $(".answer-in-review").html(txt.substring(0, i++));
                    //         // ////////////////////////////
                    //         if (i >= length + 1) {
                    //             return;
                    //             }
                    //             setTimeout(loop, 20);
                    //     }, 10);
                    // }, 700)
                })
        })
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
        console.log(token)
        const t = this;
        // var product = {
        //     name: "Defy Odds Shoes",
        //     price: 5,
        //     m: "This is all you need to pay to go on an adventure, the Defy Odds Adventure"
        // }
        t.setState({
            customConfirm: false
        })
        var userid = firebase.auth().currentUser.uid;
        var bid = this.props.bid;
        toast("Success! Check email for details", { type: "success" });
        const response = await axios.post(
            "https://headerng.herokuapp.com/https://bjorn-stripe.herokuapp.com/bid_checkout",
            { token,bid, userid }
        );
        const { status,error } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            user_ref.where("user", "==", firebase.auth().currentUser.uid)
            .get().then(query=> {
                query.forEach(doc=> {
                    user_ref.doc(doc.id)
                        .update({
                            bid: t.props.bid,
                            haveBid: true,
                        })
                })
                
            })
            t.props.changeSection(0);
        }
        else {
            console.log(error)
            this.setState({
                // customAlert: !this.state.customAlert,
                alertText: error.decline_code
            }, ()=>{
                t.setState({
                    customAlert: !this.state.customAlert,
                    // alertText: error.decline_code
                })
            })
        }
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

    render() {
        var product= {};
        let variantImage = {};
        let variants = [];
        if(this.props.answer!="undefined")
            if(this.props.products.length!=0)
            {
                product = this.props.products.filter((x,i)=>{
                    if(this.props.answer == "Laughing Leopard")
                        return x.title == "Defy Leopard"
                    if(this.props.answer == "Coiled Python")
                        return x.title == "Defy Python"
                    if(this.props.answer == "Hidden Crocodile")
                        return x.title == "Defy Crocodile"
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
                this.state.customConfirm ? <CustomConfirm handleToken={this.handleToken} email={this.state.email} bid={this.props.bid} closePopup={this.openConfirm} accept={this.accept}>
                                    <h4>Are you sure all the information is correct?</h4>
                                </CustomConfirm>: null
            }
            <div className="review-section">
                <div className="wrapper">
                    <div className="answer-in-review">
                        <p>Your bid</p>
                        <div className="price">
                            <span>${this.props.bid}</span>
                        </div>
                    </div>
                    {
                        this.state.form?
                        <div className="top">
                        <h1>Personal information</h1>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <div className="form-control disabled">
                                    <input  value={this.state.first_name} 
                                        type="text" 
                                        disabled={true}
                                        onChange={(event)=>this.setState({
                                            first_name: event.target.value
                                        })} name="first_name" id="first_name" />
                                    <a onClick={(e)=>{this.edit(e)}}><EditIcon /></a>
                                </div>
                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last name</label>
                                <div className="form-control disabled">
                                    <input  value={this.state.last_name} 
                                        type="text" 
                                        disabled={true}
                                        onChange={(event)=>this.setState({
                                            last_name: event.target.value
                                        })} name="last_name" id="last_name" />
                                    <a onClick={(e)=>{this.edit(e)}}><EditIcon /></a>
                                </div>
                                
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="phone_number">Phone number</label>
                                <div className="form-control disabled">
                                    <input  value={this.state.phone_number} 
                                        type="text" 
                                        disabled={true}
                                        onChange={(event)=>this.setState({
                                            phone_number: event.target.value
                                        })} name="phone_number" id="phone_number" />
                                    <a onClick={(e)=>{this.edit(e)}}><EditIcon /></a>
                                </div>
                                
                            </div>
                        </div>

                        <h1>Shipping information</h1>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="shipping_address">Shipping address</label>
                                <div className="form-control disabled">
                                    <input  value={this.state.shipping_address} 
                                        type="text" 
                                        disabled={true}
                                        onChange={(value)=>this.setState({
                                            shipping_address: value
                                        })} name="shipping_address" id="shipping_address" />
                                    <a onClick={(e)=>{this.edit(e)}}><EditIcon /></a>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="postal_code">Postal code</label>
                                <div className="form-control disabled">
                                    <input  value={this.state.postal_code} 
                                        type="text" 
                                        disabled={true}
                                        onChange={(value)=>this.setState({
                                            postal_code: value
                                        })} name="postal_code" id="postal_code" />
                                        <a onClick={(e)=>{this.edit(e)}}><EditIcon /></a>
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
                        {/* <a className="btn btn-black">Yes, my information is correct</a> */}
                        
                        {/* <a href="#" onClick={()=> { this.props.changeSection(1) }} className="btn btn-black">Back</a> */}
                        {
                            this.state.edit? <a href="#" onClick={(e)=> { this.save(e)  }} className="btn btn-black">Save Information</a>
                            : this.state.form? <a href="#" onClick={(e)=> { this.finish(e)  }} className="btn btn-black">Finalize And Checkout</a>: <a href="#" onClick={(e)=> { this.showForm(e)  }} className="btn btn-black">Next</a>
                        }
                        
                        {/* <a href="#" onClick={()=>{ this.props.pageChange("overview")}} className="btn btn-black">Go Back To The dashboard</a> */}
                    
                    </div> 
                </div>
            </div>
            </Fragment>
        )
    }
}

export default ReviewSection
