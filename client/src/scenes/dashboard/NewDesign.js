import React, { Component } from 'react';
// import Crocodile from './../../images/Crocodile.png';
// import Leopard from './../../images/Leopard.png';
// import python from './../../images/python.png';
// import LeftArrow from './../utilities/LeftArrow';
// import RightArrow from './../utilities/RightArrow';
import SnakeOverview from "./SnakeOverview"
import marketclip from './video/marketclip.mp4'
import python from '../../images/Python.png'


export class NewDesign extends Component {
    render() {
        return (
            <div className="new-design">
                <div className="gallery">
                    <div className="container">
                        <h1>You are a coiled python</h1>
                        <SnakeOverview/>
                        {/* <div className="columns">
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                            <div className="column"></div>
                        </div> */}
                    </div>
                </div>

                <div className="button">
                    <a href="" className="btn btn-black">Get the complete report</a>
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
                        <div className="cardboards">
                            <div className="card">
                                <div className="imgDiv">
                                    <img  src={python} alt='python shoe'
                                    style={{
                                        width: "100%"}}/>
                                </div>
                                <div className="label" style={{padding:"5px"}} >
                                    <h3>Defy Python</h3>
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <div >
                                            <small>Starting at</small>
                                            <h3>$600</h3>
                                        </div>
                                        <div>
                                            <button className="btn">Bid Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card">
                                <div className="imgDiv">
                                    <img src={python} alt='python shoe'
                                    style={{
                                        width: "100%",
                                    }}/>
                                </div>
                                <div className="label" style={{padding:"5px"}} >
                                    <h3>Exclusive Collection</h3>
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <div>
                                            <small>Starting at</small>
                                            <h3>$500</h3>
                                        </div>
                                        <div>
                                            <button className="btn">See More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default NewDesign
