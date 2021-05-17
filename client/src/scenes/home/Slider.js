import React, { Component, Fragment } from 'react';
import Slide from './Slide';
import $ from 'jquery';
import { Link } from 'react-router-dom'
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            button: false
        }
    }

    componentWillUnmount() {

    }

    moveStick = (event) => {
        if (event.keyCode == 39) {
            this.setState({
                id: this.state.id == 5 ? 1 : this.state.id + 1
            }, function () {
                $(".ticks li").removeClass("active");
                $(`#tick${this.state.id}`).addClass("active");

                // console.log($(window).outerWidth() * (this.state.id - 1))
                $(".slider").animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
            })
        }

        if (event.keyCode == 37) {
            this.setState({
                id: this.state.id == 1 ? 5 : this.state.id - 1
            }, function () {
                $(".ticks li").removeClass("active");
                $(`#tick${this.state.id}`).addClass("active");
                $(".slider").animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
            })
        }
    }

    open = (id) => {
        this.props.open(this.state.id)
    }

    rightSlide = () => {
        // console.log("ss")
        this.setState({
            id: this.state.id == 5 ? 1 : this.state.id + 1
        }, function () {
            console.log($(window).outerWidth() * (this.state.id - 1));
            $(".ticks li").removeClass("active");
            $(`#tick${this.state.id}`).addClass("active");
            $(".slider").animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
        })
    }

    leftSlide = () => {
        this.setState({
            id: this.state.id == 1 ? 5 : this.state.id - 1
        }, function () {
            $(".ticks li").removeClass("active");
            $(`#tick${this.state.id}`).addClass("active");
            $(".slider").animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
        })
    }

    componentDidMount() {

        window.addEventListener('keydown', this.moveStick, false);

        // console.log(this.props.id);
        const t = this;
        $(`.slider`).scrollLeft(1100 * (this.props.id - 1));
        setInterval(function () {
            t.setState({
                id: t.state.id == 5 ? 1 : t.state.id + 1,
                button: true
            }, function () {
                $(".slider").animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
                $(".ticks li").removeClass("active");
                $(`#tick${this.state.id}`).addClass("active");
            })

        }, 11000)

    }

    doSlide = (x) => {
        this.setState({
            id: x
        })
    }

    render() {
        return (
            <Fragment>
                <a onClick={this.leftSlide} className="left-arrow">
                    <LeftArrow />
                </a>
                <a onClick={this.rightSlide} className="right-arrow">
                    <RightArrow />
                </a>
                <div className="home-slider slider">
                    {/* <Slide id={1} title1="MORE THAN SHOES" title2="" subtitle="" /> */}
                    <Slide id={1} title1="MADE IN" title2="AFRICA" subtitle="The only luxury shoes manufactured in Africa" />
                    <Slide id={2} title1="AFRICAN" title2="SOCIAL IMPACT" subtitle="Sourced from shoe making artisans to grow smallholder livelihoods and support broader social impact" />
                    <Slide id={3} title1="AFRICAN HANDMADE" title2="CRAFTMANSHIP" subtitle="Shoes handcrafted for quality rather than quantity driven with machine assembly lines" />
                    <Slide id={4} title1="DISTINCTIVE" title2="AFRICAN DESIGNS" subtitle="Shoe designs with indigenious ethnic fabrics steeped in ancient history and age-old African tradition" />
                    <Slide id={6} title1="AFRICAN" title2="LUXURY" subtitle="The only luxury shoe brand made with the highest quality African materials" />
                </div>
                <ul className="ticks">
                    <li id="tick1" className="active"></li>
                    <li id="tick2"></li>
                    <li id="tick3"></li>
                    <li id="tick4"></li>
                    <li id="tick5"></li>
                    {/* <li id="tick6"></li> */}
                </ul>
                               <Link to={{
                        pathname: `brand`, state: {
                            id: this.state.id
                        }
                    }} className="btn btn-black">
                        Learn About The Brand
                    </Link>
                

            </Fragment>
        )
    }
}

export default Slider
