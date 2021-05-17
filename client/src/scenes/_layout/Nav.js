import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

export class Nav extends Component {
    componentDidMount() {
        document.title = "This is afrikan";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`)
    }
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="logo">
                        <Link href="/">
                            <img src="./images/logo.png" alt="afrikaan" />
                        </Link>
                    </div>

                    <ul>
                        <li><a href="#">The brand</a></li>
                        <li><Link href="/dashboard">
                            <a>The collections</a>
                        </Link></li>
                        {/* <li><a href="#">Menu Item</a></li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav
