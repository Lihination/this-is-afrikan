import React, { Component } from 'react';
import $ from 'jquery';
// import Tick from './Tick';
import User from './User';
import ShoppingbagLogo from '../utilities/ShoppingbagLogo';
import DashboardIcon from './../utilities/DashboardIcon';
import ExitIcon from './../utilities/ExitIcon';
import AccountLogo from '../utilities/AccountLogo';
import { Link } from 'react-router-dom';
import firebase from './../../services/firebase';
const user_ref = firebase.firestore().collection("users");
export class UserDropDown extends Component {

    constructor(props) {
        super(props);
        let text;
        this.state={
            firstname: "",
            lastname: ""
        }
    }

    componentDidMount() {
        const t = this;
        user_ref.where("user", "==", firebase.auth().currentUser.uid)
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

    open(e) {
        //alert();
        $(e.target).toggleClass('active');
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

    openSpan(e) {
        //alert();
        console.log($(e.target));
        $(e.target).parent().toggleClass('active');
    }

    clicked(e) {
        let text = $(e.target).text();
        $(e.target).parent()
            .parent().parent()
            .find('.display').find('span').text(text);

        // $(e.target).parent()
        // .parent().parent()
        // .find('.display').append(`<div id="down-triangle"></div>`);

        //<div id="down-triangle"></div>
    }

    dashboard = () => {

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
            <div className="user dropdown">
                <ul>
                    <li className="display" onClick={(e) => this.open(e)}><span onClick={(e) => this.openSpan(e)}>
                        {
                            this.state.firstname[0] == undefined? "": " "+this.state.firstname
                        }, defy odds!
                        </span>
                        <ul>
                            <li className="li-inner"><a className="inner" onClick={()=> {this.openDashboard()}}><DashboardIcon />My Dashboard</a></li>
                            <li className="li-inner"><a className="inner" onClick={() => this.logout()}><ExitIcon />Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserDropDown
