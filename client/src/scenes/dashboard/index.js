import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Bottom from './../_layout/Bottom';
import Cookie from './../_layout/Cookie';
import Content from './Content';
import $ from 'jquery';
// import Cookie from './../_layout/Cookie';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import './dashboard.scss';
import Oracle from '../_layout/Oracle';
import firebase from './../../services/firebase';
// import { query } from 'express';
const user_ref = firebase.firestore().collection("users");
export class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const t = this;
        window.scrollTo(0, 0)
        
        document.title = "Dashboard";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                
            }
            else{
                t.props.history.history.push({ pathname: "/login"})
            }
        })
        
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("upbid");
        if(c=="true"){
            user_ref.where("user", "==", firebase.auth().currentUser)
                .get()
                .then(query=>{
                    query.forEach(doc => {
                        const {useLink} = doc.data();
                        if(useLink){ }
                        else{
                            user_ref.doc(doc.id)
                            .update({
                                haveBid: false,
                                useLink: true,
                            })
                        }
                    })
                })
        }
    }
    render() {
        console.log(this.props.products);
        return (
            <div id="dashboard">

                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />
                {/* <Nav /> */}
                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/defy">
                        <a>Defy Odds Adventure</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to="/dashboard">
                        <a>Dashboard</a>
                    </Link></li>
                </ul>
                <Content products={this.props.products}
                    collections={this.props.collections}
                    client={this.props.client}
                    addVariantToCart={this.props.addVariantToCart}
                    answer={this.props.location.state == undefined ? "undecided" : this.props.location.state.answer} 
                    />
                {/* <Services /> */}
                <Bottom />
                <Cookie />
            </div>
        )
    }
}

export default Dashboard;
