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
export class Premium extends Component {

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
        var countDownDate = new Date("Aug 4, 2021").getTime();
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
        $("#premium-slide .products").animate({ scrollLeft: -200 }, 100);
    }

    leftSlide() {
        $("#premium-slide .products").animate({ scrollLeft: 200 }, 100);
    }

    render() {
        
        var premium = this.props.collections.filter((x, i) => {
            return x.title == "kalabar collection"
        })

        return (
            <div className="premium-design" id={`slide${this.props.id}`}>
                <div className="back">
                    <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1620142918/premium_collection-min_kg5kvw.jpg"} alt=""/>
                </div>
                <div className="slide-left">
                    {/* <div className="background">
                                <div className="gradient"></div>
                            </div> */}
                    <div className="wrapper">
                        <div className="top">
                            {/* <h1>{this.props.title}</h1> */}
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215754/kalabar_xoq8w2.png"} alt=""/>
                            
                        </div>

                        <div className="countdown">
                            <h4><b>Limited Only Available For:</b></h4>
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
                            Our first-rate flagship collection is named after the premium qualities that created it: genuine leather,
luxurious fabric and superior craftsmanship. Its designs are inspired by the sensuous city from where
they get their name. These exquisitely handcrafted genuine leather shoes are adorned with an ancient
luxurious fabric once reserved exclusively for the African nobility who ruled Old Kalabar. These shoes
are art pieces representing this ancient city’s modern day expression of bacchanal energy, unbridled
revelry and ecstatic carnival. This is New World African.
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
                                                        collection="kalabar collection"
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

export default Premium
