import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import $ from 'jquery';
export class BidSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: this.props.answer=="Snake"? 500: 
                this.props.answer=="Leopard"? 625 : 
                this.props.answer=="Crocodile"? 750 : null,
            minText: "No Offer",
            max: 2000,
            days: 0,
            hours: 0,
            minutes: 0,
            price: 500,
            minPrice: 0,
            maxPrice: 0,
            locked: false
        }
    }

    handleChange = (e,val) => {
        
        if(val==600)
        {
            
            this.setState({ maxPrice: 0,
                minPrice: 0, minText: "No Offer" });
            $(".lock-btn").addClass("disabled")
        }
        else
        {
            this.setState({ maxPrice: val,
                minPrice: 0 });
            $(".lock-btn").removeClass("disabled")
        }
        
      }

      textChange = (event) => {

      }

      componentDidMount() {
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("Jul 19, 2021").getTime();
        // console.log(now.getDay());
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            console.log(days)
            // Display the result in the element with id="demo"
            // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
            t.setState({
                days: days,
                hours: hours,
                minutes: minutes
            })
          
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
            //   document.getElementById("demo").innerHTML = "EXPIRED";
                t.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0
                })
            }
          }, 1000);
        
    }

    lock = () => {
        if(this.state.maxPrice)
            this.setState({
                locked: true
            }, ()=> {
                $(".checkout-btn").removeClass("disabled")
                $(".lock-btn").addClass("disabled")
            })
    }

    clear = () => {
        this.setState({
            maxPrice: 0,
            locked: false
        }, ()=> {
            $(".checkout-btn").addClass("disabled")
            $(".lock-btn").removeClass("disabled")
        })
    }

    checkout = () => {
        if(this.state.locked){
            this.props.bid(this.state.maxPrice); 
            setTimeout(()=>{
                this.props.changeSection(2);
            },300);
        }
        else{
            alert("Please pick a bid.")
        }
    }

    render() {
        return (
            <div className="bid-section">
                <div className="wrapper">
                    {/* <h1>The coiled python shoes</h1> */}
                    <h4>
                    We’ve developed an auction process to match you with the <b><i>one pair of shoes we designed uniquely for your personality.</i></b> Here's how it works:

                        <ol>
                            <li>Make a bid offer by moving the slider dial below to an amount of your choice. Offers must be made before the auction date count down expires.</li>
                            <li>Bid offers can be changed or withdrawn at any time until you lock and confirm your bid through the check out process. 
</li>
                            <li>On the auction date, we'll notify you via email if your offer is accepted; you'll be billed at that time only and your shoes will immediately be sent to you. If your offer is not accepted, you won't be charged for anything.
</li>
                        </ol>
                    </h4>
                    <div className="countdown">
                        <h2>Countdown To Auction:</h2>
                        <ul>
                            <li>
                                <div className="value">
                                    <h1>{this.state.days}</h1>
                                </div>
                                <p>Days</p>
                            </li>

                            <li>
                                <div className="value">
                                    <h1>{this.state.hours}</h1>
                                </div>
                                <p>Hours</p>
                            </li>

                            <li>
                                <div className="value">
                                    <h1>{this.state.minutes}</h1>
                                </div>
                                <p>Minutes</p>
                            </li>
                        </ul>
                    </div>

                    <div className="prices">
                        <div className="left">
                            <p>{this.state.minText}</p>
                            <h3><span>$</span>{this.state.minPrice}</h3>
                        </div>        
                        
                        <div className="slider">
                            <PrettoSlider value={this.state.maxPrice} disabled={this.state.locked}  onChange={(e, val)=>this.handleChange(e, val)} min={this.state.min} max={this.state.max} step={50} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                        </div>
                        <div className="right">
                            <p>Your Offer</p>
                            <div className="price">
                                <span>$</span>
                                {/* {this.state.maxPrice} */}
                                <input onChange={(e)=>this.setState({
                                    maxPrice: e.target.value
                                })} value={this.state.maxPrice} type="text"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="buttons">
                        <a href="#" onClick={(e)=> { e.preventDefault(); this.clear() }} className="btn btn-black">Clear</a>
                        <a onClick={()=> {this.lock() }} className="btn btn-black lock-btn disabled">Lock bid</a>
                        <a  onClick={()=> {this.checkout()  }} className="btn btn-black disabled checkout-btn">Checkout Process</a>
                        {/* <a href="#" onClick={()=>{ this.props.pageChange("overview")}} className="btn btn-black">Go Back To The dashboard</a> */}
                    </div>

                    {/* <div className="lock-button">
                        <a className="btn btn-black disabled" onClick={()=> { this.props.changeSection(1) }}>Lock bid</a>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default BidSection;

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: "100%"
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#fff',
        },
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);