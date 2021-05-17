import React, { Component } from 'react';
import GlobeIcon from './../utilities/GlobeIcon';
import BookIcon from './../utilities/BookIcon';
import StrengthIcon from './../utilities/StrengthIcon';
import strength from './../../images/strength.png';
import shoes from './../../images/shoes.png';
import book from './../../images/book.png';
import globe from './../../images/globe.png';

export class Overview extends Component {
    render() {
        return (
            <div className="overview" id="overview">
                <h3>You are a {this.props.answer}</h3>
                <div className="options">
                    <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "what")}><img src={globe} alt=""/></a>
                        <h4>What this means?</h4>
                        <p>
                        Smiling Leopard with
                        human face is the chief
                        symbol for great strength,
                        stealth, and vision
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "what")} className="btn btn-green">SEE REPORT</a>
                    </div>

                    <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "historical")}><img src={book} alt=""/></a>
                        <h4>African Context</h4>
                        <p>
                            Leopards were admired for
                            their beautiful coats, stealth
                            and strength but also
                            greatly feared for their maneating tendencies. 
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "historical")} className="btn btn-green">SEE REPORT</a>
                    </div>

                    <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "strengths")}><img src={strength} alt=""/></a>
                        <h4>Top Strengths</h4>
                        <p>
                            <ul>
                                <li>Courage</li>
                                <li>Vision</li>
                                <li>Loyalty</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "strengths")} className="btn btn-green">SEE REPORT</a>
                    </div>

                    <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "strengths")}><img src={strength} alt=""/></a>
                        <h4>Top weaknesses</h4>
                        <p>
                            <ul>
                                <li>Reckless</li>
                                <li>Rigid</li>
                                <li>Confrontational</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "strengths")} className="btn btn-green">SEE REPORT</a>
                    </div>

                    <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "shoes")}><img src={shoes} alt=""/></a>
                        <h4>The shoes for you</h4>
                        <p>
                            We’ve designed a pair of shoes to provide physical reminder of your distinct personality traits within an ancient African
                            historical context to support your defy odds journey. 
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "shoes")} className="btn btn-green">SEE REPORT</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overview
