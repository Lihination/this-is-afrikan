import React, { Component } from 'react';
import Oracle from './../_layout/Oracle';
import Slider from './Slider';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import headerMovie from './../../images/header.mp4';

export class Header extends Component {

    render() {
        return (
            <div className="header">
                {/* <video id="headerVideo" autoPlay="autoplay" muted="muted">
                    <source src={headerMovie} type="video/mp4" />
                </video> */}
                <div className="overlay">
                    <Link className="oracle-ghost" to="/defy">
                        
                            <Oracle />

                    </Link>

                    <Slider />
                </div>
            </div>
        )
    }
}

export default Header
