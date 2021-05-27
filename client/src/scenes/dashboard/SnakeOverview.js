import React, { Component } from 'react';
// import Crocodile from './../../images/Crocodile.png';
// import Leopard from './../../images/Leopard.png';
// import python from './../../images/python.png';
// import LeftArrow from './../utilities/LeftArrow';
// import RightArrow from './../utilities/RightArrow';
import SnakeOverview from "./SnakeOverview"
import Leopard from "../../images/Leopard_back.png"
import marketclip from './video/marketclip.mp4'
import umbrella from './images/market-stall.png'
import shoe from './images/shoe.png'


export class SnakeDesign extends Component {
    render() {
        return (
            <div className="new-design">
                <div className="gallery">
                    <div className="container">                        
                        <h1>You are a coiled python</h1>
                        {/* <SnakeOverview/> */}
                        <div className="columns">
                        <img src={Leopard} alt="leopard"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "40%",
                                height: "83%",
                                transform: "translate(25%, -27%)",
                                zIndex: "-1"
    
                            }}
                        />
                            <div className="column">
                                {/* <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/snake_icon_ntqbhr.png"} alt=""/></a> */}
                                <h4>The Pictograph</h4>
                        <p>
                            The pictograph of the
                            archetype is coiled as a
                            symbol of python’s crushing
                            power which is depicted in
                            its multiple loops.
                            The ideographic
                            representation of these
                            loops also echo the cyclical
                            nature of life

                        </p>
                            {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                        </div>
                            <div className="column">
                            <h4>Divination</h4>
                        <p>
                        You are the Coiled Python.
The Coiled Python is the
primary symbol for great
intuition, wisdom, and
preparation

                        </p>

                            </div>
                            <div className="column">
                            <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Intuition</li>
                                <li>Preparation</li>
                                <li>Greed</li>
                                <li>Self absorbed</li>
                                <li>Risk adverse</li>
                            </ul>
                        </p>

                            </div>
                            <div className="column">
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

                            </div>
                            {/* <div className="column"></div> */}
                        </div>
                        <div className="button">
                            <a href="" className="btn btn-black">Buy Full report</a>
                            {/* <a onClick={()=>this.openPDF()} className="btn btn-black"> Buy Full Report</a> */}
                        </div>
                    </div>
                </div>

                <div className="collection-section">         
                    <div className="collections">
                        <video autoPlay loop muted
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "95%",
                            height: "95%",
                            borderRadius: "10px",
                            objectFit: "cover",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1"
                        }}
                        >
                            <source src={marketclip} type="video/mp4"/>
                        </video>
                        <div className="shops">
                            <div className="shop">
                            <img  src={umbrella} alt='umbrella'
                                    style={{
                                        width: "60%"}}/>
                            </div>
                            <div>
                                <button>Buy Now</button>
                            </div>
                            <div className="shop">
                                <img src={umbrella} alt='umbrella'
                                        style={{
                                            width: "60%",
                                        }}/>
                            </div>
                            <div>
                                <button>Buy Now</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default SnakeDesign
