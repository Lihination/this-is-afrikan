import React, { Component } from 'react';
import FreeShipping from './../utilities/FreeShipping';
import FastShipping from './../utilities/FastShipping';
import FullHours from './../utilities/FullHours';
import free_shipping from './../../images/free-shipping.png';
import fast_delivery from './../../images/fast-delivery.png';
import hours from './../../images/hours.png';

export class Services extends Component {
    render() {
        return (
            <div className="services">
                <div className="container">
                    <div className="service">
                        <img src={free_shipping} />
                        <small>Free shipping</small>
                    </div>

                    <div className="service">
                        <img src={fast_delivery} />
                        <small>Fast shipping</small>
                    </div>

                    <div className="service">
                        <img src={hours} />
                        <small>24/7 support</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
