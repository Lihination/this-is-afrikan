import React, { Component } from 'react';
// import Crocodile from './../../images/Crocodile.png';
// import Leopard from './../../images/Leopard.png';
// import python from './../../images/python.png';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import './Report.scss'

export class NewDesign extends Component {
    render() {
        return (
            <div className="new-design">
                <div className="gallery">
                    <div className="container">
                        <h1>You are a coiled python</h1>
                        <div className="options">
                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215717/crocodile_icon_dtr3d0.png"} alt=""/></a>
                        <h4>The Pictograph</h4>
                        <p>
                        The pictograph of the
Hidden Crocodile is rife with
a variety of claw symbols
echoing the centrality of
might and power to this
archetype
The amphibious beast’s face
is hidden or submerged to
underline its adaptability to
multiple environments

                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/mask_va61zi.png"} alt=""/></a>
                        <h4>Divination</h4>
                        <p>
                        You are the Hidden
Crocodile.
The Hidden Crocodile is the
primary symbol for raw
power, might and majesty. 
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/strength_qmjnla.png"} alt=""/></a>
                        <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Might</li>
                                <li>Honesty</li>
                                <li>Idealism</li>
                                <li>Fortune</li>
                                <li>Hot-headedness</li>
                            </ul>
                        </p>
                        
                    </div>

                    {/* <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "strengths")}><img src={strength} alt=""/></a>
                        <h4>Top weaknesses</h4>
                        <p>
                            <ul>
                                <li>Reckless</li>
                                <li>Rigid</li>
                                <li>Confrontational</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "strengths")} className="btn btn-green">Full Report</a>
                    </div> */}

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215769/shoes_ojmsv4.png"} className="shoe" alt=""/></a>
                        <h4>Defy Odds Shoes</h4>
                        <p>
                            We’ve designed a pair of
                            shoes to provide a physical
                            reminder of your distinct
                            personality traits within an
                            ancient African historical
                            context to support your defy
                            odds journey    
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>
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
