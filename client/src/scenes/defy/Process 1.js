import React, { Component } from 'react';
import ContractLogo from './../utilities/ContractLogo';
import CreditLogo from './../utilities/CreditLogo';
import BidLogo from './../utilities/BidLogo';
import MaskLogo from './../utilities/MaskLogo';
import contract from './../../images/contract.png';
import mask from './../../images/mask.png';
import credit from './../../images/credit.png';
import auction from './../../images/auction.png';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import ProcessSlide from './ProcessSlide';
import $ from 'jquery';

export class Process extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: 0
        }
        this.arr = [
            "Sign-up And One Time Fee",
            
            "Meet The Defy Odds Oracle",
            "Get your dashboard and report",
            "Bid on the limited run shoes for you"
        ]

        this.subtitles = [
            "A quick account set-up, be sure to use an email account you will remember. After which you will be re-directed to make your one time consultation payment",
            // "A $50 one time payment to complete your sign-up. We take your privacy very seriously, and will never share your account or banking information with external parties. Yo can read about our privacy policy here",
            "Have a quck 25 question session with the Defy Odds oracle and learn about your destiny",
            "",
            "Discover and bid on one of 6 individualized limted edition shoes inscribed that match your destiny’s . . ."
        ]

    }

    componentDidMount(){
        $(".numIndexes li").addClass("active");
        $(".numIndexes #1").removeClass("active");
        $(".numIndexes #2").removeClass("active");
        $(".numIndexes #3").removeClass("active");
        $(".numIndexes #4").removeClass("active");
    }

    rightSlide = () => {
        this.setState({
            id: this.state.id == 3 ? 3 : this.state.id + 1
        }, () => {
            $(".process-slider").animate({ scrollLeft: $(".process-slider").outerWidth() * (this.state.id) }, 500);
            $(".numIndexes li").removeClass("active");
            console.log($(`.numIndexes #${this.state.id}`))
            $(`#${this.state.id}.processIndex`).addClass("active");
        })
    }

    leftSlide = () => {
        this.setState({
            id: this.state.id == 0 ? 0 : this.state.id - 1
        }, () => {
            $(".process-slider").animate({ scrollLeft: $(".process-slider").outerWidth() * (this.state.id) }, 500);
            $(".numIndexes li").removeClass("active");
            $(`#${this.state.id}.processIndex`).addClass("active");
        })
    }

    render() {
        return (
            <div className="process">
                <div className="inner">
                    <div className="top">
                        <h3>{this.arr[this.state.id]}</h3>
                        <p>{this.subtitles[this.state.id]}</p>
                    </div>
                    
                    <div className="content">
                        <a onClick={this.leftSlide} className="left-arrow">
                            <LeftArrow />
                        </a>

                        <div className="process-body">
                            <div className="process-slider">
                                {
                                    this.arr.map((x,i)=>(
                                        <ProcessSlide id={i} />
                                    ))
                                }
                            </div>

                            <ul className="numIndexes">
                                {
                                    this.arr.map((x,i)=> (
                                        <li className="processIndex" id={`${i}`}>{i+1}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a>
                    </div>
                    
                    <div className="bottom">
                        <a onClick={() => this.props.change("registration")} className="btn btn-black">Sign me up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Process
