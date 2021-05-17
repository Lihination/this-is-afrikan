import React, { Component } from 'react';
import CollectionPattern from './../utilities/CollectionPattern';
import { Link } from 'react-router-dom';
import LeafLogo from './../utilities/LeafLogo';
// import leaf from './../../images/leaf.png'
// import collections_banner from './../images/collections_banner.png';

export class Collections extends Component {
    render() {
        return (
            <div className="collections">
                <div className="background">
                </div>
                <div className="left">
                    <div className="wrapper">
                        <div className="top">
                            <h1>OUR SHOE COLLECTIONS</h1>
                            <p>
                                Take a look at our limited-edition shoe <br/>
                            collections available from <b>July 4<sup>th</sup></b>
                            </p>
                        </div>

                        <div className="bottom">
                            <Link  to="/collections" className="btn btn-black">
                                Shop now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="img">
                    </div>
                    {/* <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1617968847/collections_banner_fiplbj.jpg"} alt=""/> */}
                </div>

                {/* <img className="collections-banner" src="/images/collections_banner.png" alt="" /> */}

            </div>
        )
    }
}

export default Collections
