import React, { Component } from 'react';
import $ from 'jquery';
// import Tick from './Tick';
import User from './User';
import ShoppingbagLogo from '../utilities/ShoppingbagLogo';
import AccountLogo from '../utilities/AccountLogo';
import { Link } from 'react-router-dom';

export class UserDropDown extends Component {

    constructor(props) {
        super(props);
        let text;

    }

    componentDidMount() {

    }

    open(e) {
        //alert();
        $(e.target).toggleClass('active');
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

    render() {

        return (
            <div className="user dropdown">
                <ul>
                    <li className="display" onClick={(e) => this.open(e)}><span onClick={(e) => this.openSpan(e)}></span><div id="down-triangle" onClick={(e) => this.openSpan(e)}></div>
                        <ul>
                            <li><Link to={{
                                pathname: "/dashboard", state: {
                                    answer: "undecided"
                                }
                            }}><AccountLogo />My Dashboard</Link></li>
                            <li><a onClick={() => this.logout()}><AccountLogo />Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserDropDown
