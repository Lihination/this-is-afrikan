import React, { Component } from 'react';
// import Crocodile from './../../images/Crocodile.png';
// import Leopard from './../../images/Leopard.png';
// import python from './../../images/python.png';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';

export class NewDesign extends Component {
    render() {
        return (
            <div className="new-design">
                <div className="gallery">
                    <div className="container">
                        <h1>You are a coiled python</h1>
                        <div className="columns">
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <a href="" className="btn btn-black">Get the complete report</a>
                </div>

                <div className="collection-section">
                    <h2>
                        Your shoe collections
                    </h2>
                    
                    <div className="collections">
                        <div className="background">
                            {/* <div className="inner"></div> */}
                        </div>
                        <div className="left-arrow">
                            <a href=""><LeftArrow/></a>
                        </div>
                        <div className="right-arrow">
                            <a href=""><RightArrow/></a>
                        </div>
                        <ul className="ticks">
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <small>Swipe to see more</small>
                         <div className="collection active" id="1">
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621149068/Python_spuapl.png"} className="shoe" alt="" />
                            <img className="alternate" src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621150717/alternate_pxt60y.png"} alt="" />
                            <div className="info">
                                <h3>Coiled python shoes</h3>
                                <h6>Starting at</h6>
                                <h3>$600</h3>
                            </div>
                        </div> 
                        {/*
                        <div className="collection active" id="2">
                            <img src={Crocodile} className="shoe" alt="" />
                            
                            <div className="info">
                                <h3>Coiled python shoes</h3>
                                <h6>Starting at</h6>
                                <h2>$600</h2>
                            </div>
                        </div>
                        <div className="collection active" id="3">
                            <img src={Leopard} className="shoe" alt="" />
                            
                            <div className="info">
                                <h3>Coiled python shoes</h3>
                                <h6>Starting at</h6>
                                <h3>$600</h3>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewDesign
