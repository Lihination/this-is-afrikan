import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Product from './Product';
import shortid from  "shortid";
// import monolith from './../../images/monolith.png';
import $ from 'jquery';
// import upcoming from './../../images/upcoming.png';
// import upcoming_back from './../../images/upcoming_back.png';
// import upcoming_b from './../../images/upcoming_b.png';
// import upcoming_1 from './../../images/upcoming_1.png';
// import upcoming_2 from './../../images/upcoming_2.png';
//                                 The rustic Collection; imperfect perfection, deliberately designed to remind you that this.is.africa, and she is beautiful in her flaws.
//                             </p> */}
export class Upcoming extends Component {
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
        var countDownDate = new Date("Sep 4, 2021").getTime();
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
            //   document.getElementById("demo").innerHTML = "EXPIRED";
                t.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
            }
          }, 1000);
        
    }
    render() {
        var premium = this.props.collections.filter((x, i) => {
            return x.title == "upcoming collection"
        })
        // console.log(premium)
        if (this.props.collections.length > 0) {
            // console.log(premium[0])
        }
        return (
            <div className="upcoming-design" id={`slide${this.props.id}`}>
                 <div className="back">
                     {/* <img src={upcoming_1} alt=""/>
                     <img src={upcoming_2} alt=""/> */}
                     {/* <img src={upcoming_back} alt=""/> */}
               </div>
                <div className="slide-left">
                    {/* <div className="background">
                                <div className="gradient"></div>
                            </div> */}
                    <div className="wrapper">
                        <div className="top">
                            {/* <h1>{this.props.title}</h1> */}
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215670/upcoming_dhy9rx.png"} alt=""/>
                            {/* <p>
                                Inspired by the sensuous city from whence it gets its name, this collection is made from an ancient premium fabric once reserved exclusively for the likes of the African nobility who ruled that area. These shoes are art pieces representing the modern day expression of its bacchanal energy, unbridled revelry and ecstatic carnival. This is New World African.

                            </p> */}
                        </div>
                        <div className="countdown">
                            <h4><b>One-pair Edition Only</b> Preorder Before Deadline Below:</h4>
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
                            Named after one of Africa’s ports, the new Badagri design represnts a new export out of africa. Only available by preorder, this design embodies the intellect, creativity and energy of a new Africa. All preorders come with your choice of two premium leather laces, our signature giftbox or free shipping.</p>
                        </div>
                        <div className="bottom" id="premium-slide">
                        {/* <a onClick={this.leftSlide} className="left-arrow">
                            <LeftArrow />
                        </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a> */}
                            <div className="products">
                                {
                                    this.props.collections.length > 0 ?
                                        
                                            premium[0].products.map((product, i) => {
                                                return (
                                                    <Product
                                                    id={i}
                                                        addVariantToCart={this.props.addVariantToCart}
                                                        client={this.props.client}
                                                        key={shortid.generate()}
                                                        product={product}
                                                        collection="upcoming collection"
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

export default Upcoming
