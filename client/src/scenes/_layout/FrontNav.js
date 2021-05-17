import React, { Component } from 'react';
// import Link from 'next/link';
import { Link } from 'react-router-dom'

export class FrontNav extends Component {
    render() {
        return (
            <nav className="front-nav">
                <div className="container">
                    <div className="logo">
                        <Link href="/">
                            <img src="./images/logo.png" alt="afrikaan" />
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default FrontNav
