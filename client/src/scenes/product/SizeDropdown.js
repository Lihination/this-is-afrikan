import React, { Component } from 'react';
import $ from 'jquery';
// import Tick from './Tick';
// import User from './User';
import ShoppingbagLogo from '../utilities/ShoppingbagLogo';
import DashboardIcon from './../utilities/DashboardIcon';
import ExitIcon from './../utilities/ExitIcon';
import AccountLogo from '../utilities/AccountLogo';
import { Link } from 'react-router-dom';
import DownArrow from './../utilities/DownArrow';
import firebase from './../../services/firebase';
// const user_ref = firebase.firestore().collection("users");
export class SizeDropDown extends Component {

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
        
    }

    open(e) {
        // console.log($(e.target));
        $(e.target).toggleClass('active');
    }

    logout = () => {
        const t = this;
        t.setState({
            loading: true
        })
    }

    openSpan(e) {
        console.log($(e.target));
        $(e.target).parent().toggleClass('active');
    }

    clicked(e) {
        let text = $(e.target).text();
        $(e.target).parent()
            .parent().parent()
            .find('.display').find('span').text(text);
    }

    dashboard = () => {

    }

    render() {

        return (
            <div className="size dropdown">
                <ul>
                    <li className="display" onClick={(e) => {this.open(e)}}><span onClick={(e) => {this.openSpan(e)}}>
                        Select Your Size 
                        </span>
                        <DownArrow />
                        <ul>
                            <li className="sizes-list">
                            {
                                this.props.variants == undefined?
                                    null :
                                        this.props.variants.map((x,i)=> (
                                        <a onClick={(e) => {e.preventDefault();this.props.variantClick(e, x.id)}}>{x.title}</a>
                                    ))
                                }
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SizeDropDown
