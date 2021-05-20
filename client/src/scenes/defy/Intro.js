import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../../services/firebase';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
export class Intro extends Component {
    change = () => {

        this.props.change("process");
    }

    render() {
        return (
            <div className="intro">
                <div className="background"></div>
                <GreenAfricanMask />
                <div className="title">
                <h1>The Defy Odds Adventure</h1>
                </div>
                
                <div className="top">
                    <p>
                    Journey into the Defy Odds Adventure and discover something more… 
                        <ul>
                        <div className="space"></div>
                            <li>
                                <b>Learn about an ancient African belief system</b> that inspired the fictional civilization of Wakanda.
                            </li>
                            <div className="space"></div>
                            <li>
                                <b>Discover your Defy Odds instinct</b> in the context of ancient African belief systems.
                            </li>
                            <div className="space"></div>
                            <li>
                                <b>Gain access to exclusive private shoe collections</b> designed entirely to appeal to your
personality. Some of which are not available through our public shoe collections.
                            </li>
                            <div className="space"></div>
                            <li>
                                <b>Meet our humanoid cyber Oracle</b> to enter into an African ethos where understanding
your instincts are key to unlocking your destiny and defying life’s odds.
                            </li>
                            <div className="space"></div>
                        </ul>
                        {/* <div className="space"></div> */}
                        Don’t have time for a roaming adventure right now? That’s ok; just go back to our main shoe collections.
                        
                </p>
                </div>

                <div className="bottom">
                    <div className="button">

                        <a onClick={this.change} className="btn btn-black">Consult The Oracle</a>

                    </div>

                    <small>Or</small>
                    <Link to="/collections">
                        <a className="text">Main Shoe Collections</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Intro
