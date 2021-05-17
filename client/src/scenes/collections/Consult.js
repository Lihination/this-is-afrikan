import React, { Component } from 'react';
import AfricanMask from './../utilities/AfricanMask';
import { Link } from 'react-router-dom';

export class Consult extends Component {
    render() {
        return (
            <div className="consult" id={`slide${this.props.id}`}>
                <div className="slide-left">
                    <AfricanMask />
                    <div className="wrapper">
                        <div className="top">
                            <h1>Lorem ipsum dolor sit</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Volutpat tincidunt aliquam vitae nullam. Ac
                                leo cursus a sit eget orci. Mauris cras vel tellus
                                quis eleifend vitae ut.
                            </p>
                        </div>
                        <div className="bottom">
                            <Link href="/products">
                                <a href="#" className="btn btn-darkgrey">BUY NOW</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="slide-right">
                    <div className="wrapper">
                        <div className="gradient">
                        </div>
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ullamcorper id eu, feugiat
                                sed et. In nec quis enim egestas sed arcu
                                vitae adipiscing. Lectus et lorem molestie
                                neque.By using this service you agree to the
                                terms and conditions given in our terms and
                                conditions white papar.
                            </p>
                        </div>

                        <div className="bottom">
                            <div className="buttons">
                                <a href="#">
                                    <img src="/images/thumbs-down.png" alt="" />
                                </a>

                                <a href="#">
                                    <img src="/images/thumbs-up.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Consult
