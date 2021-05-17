import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Product from './Product';
// import monolith from './../../images/monolith_2.png';
// import afrasia from './../../images/afrasia.png';
import $ from 'jquery';
import shortid from  "shortid";
// import rustic_1 from './../../images/rustic_1.png';
// import rustic_2 from './../../images/rustic_2.png';
// import rustic_3 from './../../images/rustic_3.png';
// import rustic from './../../images/rustic.png';
export class Slide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
        }

    }
    componentWillMount() {
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("Aug 19, 2021").getTime();
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

    rightSlide() {
        // console.log("ss")
        $("#rustic-slide .products").animate({ scrollLeft: -200 }, 100);
    }

    leftSlide() {
        $("#rustic-slide .products").animate({ scrollLeft: 200 }, 100);
    }

    render() {
        var premium = this.props.collections.filter((x, i) => {
            return x.title == "Rustic Collection"
        })
        if (this.props.collections.length > 0) {
            // console.log(premium[0].products[0])
        }

        return (
            <div className="slide" id={`slide${this.props.id}`}>
                <div className="back">
                    <div className="overlay">

                    </div>
                </div> 
                <div className="slide-left">
                    <div className="wrapper">
                        <div className="top">
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215767/rustic_e6k807.png"} alt=""/>
                        </div>

                        <div className="countdown">
                            <h4><b>One-pair Edition Only</b> Available For:</h4>
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
                            Inspired by the unadulterated experience of today’s urban Africa, this collection is made from the contemporary styles pioneered by the fast-paced street cultures of Africa’s city dwellers. Like the bustling settings of today’s African metropolises, these shoes capture the exciting energy and multifaceted reality of today’s African urban experience with the collection’s vibrant colors, labyrinth networks and bustling designs. This is New World African.

</p>
                        </div>
                        <div className="bottom">
                            <div className="products">
                                {
                                    this.props.collections.length > 0 ?
                                        premium[0].products.map((product, i) => {
                                            // console.log("colle")
                                            return (
                                                <Product
                                                    id={i}
                                                    addVariantToCart={this.props.addVariantToCart}
                                                    client={this.props.client}
                                                    key={shortid.generate()}
                                                    product={product}
                                                    collection="Rustic Collection"
                                                />
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide-right">
                    <div className="top">
                        {/* <img src={afrasia} alt=""/> */}
                        {/* <img src={rustic_1} alt=""/> */}
                        {/* <img src={rustic_2} alt=""/>
                        <img src={rustic_3} alt=""/> */}
                    </div>

                    <div className="bottom" id="rustic-slide">
                        {/* <a onClick={this.leftSlide} className="left-arrow">
                            <LeftArrow />
                        </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a> */}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide
