import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Product from './Product';
import shortid from  "shortid";
// import monolith from './../../images/monolith.png';
import $ from 'jquery';
// import test_slide from './../../images/test_slide.png';
// import kalabar from './../../images/kalabar.png';
export class DefyOdds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

    }
    componentWillMount() {
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("Sep 19, 2021").getTime();
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
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(days)
            // Display the result in the element with id="demo"
            // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
            t.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
          
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                t.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
          }, 1000);
        
    }

    rightSlide() {
        // console.log("ss")
        $("#DefyOdds-slide .products").animate({ scrollLeft: -200 }, 100);
    }

    leftSlide() {
        $("#premium-slide .products").animate({ scrollLeft: 200 }, 100);
    }

    render() {
        
        var premium = this.props.collections.filter((x, i) => {
            return x.title == "Defy Odds"
        })

        return (
            <div className="defy-design" id={`slide${this.props.id}`}>
                <div className="back">
                    {/* <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1616152737/defy_odds_banner_pa2kex.png"} alt=""/> */}
                </div>
                <div className="slide-left">
                    {/* <div className="background">
                                <div className="gradient"></div>
                            </div> */}
                    <div className="wrapper">
                        <div className="top">
                            {/* <h1>{this.props.title}</h1> */}
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621155885/Mask_Group_43_wy1rrx.png"} alt=""/>
                        </div>

                        <div className="countdown">
                            <h4><b>One-pair Only Available For:</b></h4>
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
                                <li>
                                            <div className="value">
                                                <h1>{this.state.seconds}</h1>
                                            </div>
                                            <p>Seconds</p>
                                        </li>
                            </ul>
                        </div>

                        <div className="middle">
                            <p> 
                            Our brand signature, the Defy Odds Collectible, epitomizes the entirety of Thisisáfrìkán.
With only one pair made per size, the bold rarity of these one-of-a-kind shoes fearlessly
represent our most exclusive design where there can only be one pair for you. The
superiority of this extremely limited edition reflects an unparalleled handcraftsmanship
superiority and is unquestionably the most aesthetic shoe design in our stable. What’s more,
the Defy Odds Collectible are more than luxury shoes; they offer a whole other level of
experience through an exciting journey steeped in ancient African ritual, culture and
meaning for the discerning yet audacious consumer; <Link to="defy">click here</Link> to discover your Defy
Odds Adventure. 
                            </p>
                        </div>
                        <div className="bottom" id="premium-slide">
                        {/* <a onClick={this.leftSlide} className="left-arrow">
                            <LeftArrow />
                        </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a> */}
                            <div className="products">
                                {////
                                    this.props.collections.length > 0 ?
                                        
                                            premium[0].products.map((product,i) => {
                                                return (
                                                    <Product
                                                    id={i}
                                                        addVariantToCart={this.props.addVariantToCart}
                                                        client={this.props.client}
                                                        key={shortid.generate()}
                                                        product={product}
                                                        collection="Defy Odds"
                                                    />
                                                )
                                            })
                                            // : null
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="slide-right">
                    <div className="top">
                    </div>

                    
                </div> */}
            </div>
        )
    }
}

export default DefyOdds
