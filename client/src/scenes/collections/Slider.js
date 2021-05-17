import React, { Component, Fragment } from 'react';
import Slide from './Slide';
import Consult from './Consult';
import PrevLogo from './../utilities/PrevLogo';
import NextLogo from './../utilities/NextLogo';
import Premium from './Premium';
import DefyOdds from './DefyOdds';
import Upcoming from './Upcoming';

import $ from 'jquery';
export class Slider extends Component {
    constructor(props){
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            id: this.props.id,
            
        }
        // window.addEventListener("popstate", e => {
            
        // });
    }
    componentDidUpdate() {
        // console.log(this.props.id);
        // $(`.slider`).scrollLeft(1100 * (this.props.id - 1));
        // window.history.pushState(null, null, window.location.href);
        
        $(".slider").animate({ scrollLeft: $(document).outerWidth() * (this.props.id - 1) }, 500);
        $(".links #link1").removeClass("active");
        $(".links #link2").removeClass("active");
        $(".links #link3").removeClass("active");
        $(".links #link4").removeClass("active");
        // $(".links #link5").removeClass("active");
        $(`#link${this.props.id}`).addClass("active");
        
    }
    componentWillMount(){
        // if(this.props.collection=="rustic collection"){
        //     $(".slider").animate({ scrollLeft: $(document).outerWidth() * (this.props.id - 1) }, 500);
        // }
        // else if(this.props.collection=="kalabar collection"){
        //     this.setState({
        //         id: 1
        //     })
        // }
        // else if(this.props.collection=="upcoming collection"){
        //     this.setState({
        //         id: 3
        //     })
        // }
    }
    componentDidMount() {
        window.addEventListener("popstate", e => {
            
        });
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("Feb 28, 2021").getTime();
        // console.log(this.props.collection)
        if(this.props.collection=="Rustic Collection"){
            $(".slider").animate({ scrollLeft: $(document).outerWidth() }, 10);
        }
        else if(this.props.collection=="kalabar collection"){
            $(".slider").animate({ scrollLeft: $(document).outerWidth() * (0) }, 10);
        }
        else if(this.props.collection=="upcoming collection"){
            $(".slider").animate({ scrollLeft: $(document).outerWidth() * 2 }, 10);
        }
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
        return (
            <Fragment>
                <div className="slider">
                    {/* <DefyOdds id={1} /> */}
                    <DefyOdds products={this.props.products}
                        client={this.props.client}
                        collections={this.props.collections}
                        title={"Defy Odds Collectible"}
                        addVariantToCart={this.props.addVariantToCart}
                        id={1} removeButton={true} />
                    <Premium products={this.props.products}
                        client={this.props.client}
                        collections={this.props.collections}
                        title={"Premium Collection"}
                        addVariantToCart={this.props.addVariantToCart}
                        id={2} removeButton={true} />
                    <Slide products={this.props.products}
                        client={this.props.client}
                        collections={this.props.collections}
                        title={"Rustic Collection"} id={3}
                        addVariantToCart={this.props.addVariantToCart}
                        removeButton={false} />
                    <Upcoming products={this.props.products}
                        client={this.props.client}
                        collections={this.props.collections}
                        title={"Upcoming Collections"} id={4}
                        addVariantToCart={this.props.addVariantToCart}
                        removeButton={false} />
                    
                </div>
            </Fragment>
        )
    }
}

export default Slider
