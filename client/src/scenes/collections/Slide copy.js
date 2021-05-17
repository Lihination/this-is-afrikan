import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Product from './Product';
import monolith from './../../images/monolith_2.png';
import afrasia from './../../images/afrasia.png';
import $ from 'jquery';

export class Slide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
        }

    }
    componentDidMount() {
        var now = new Date();
        console.log(now.getDay());
        this.setState({
            days: 31 - now.getDay(),
            hours: 24 - now.getHours(),
            minutes: 60 - now.getMinutes()
        })
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
            console.log(premium[0].products[0])
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
                            <div className="background">
                                <div className="gradient"></div>
                            </div>
                            <h1>{this.props.title}</h1>
                            <p>
                            Inspired by the unadulterated experience of today’s African urban everyman. This collection is made from the contemporary fabrics of the people. Like the bustling settings of today’s African metropolitan areas, these shoes capture the energy and reality of the modern African experience with its vibrant colors and chaotic designs. This is New World African.

                            </p>
                            
                        </div>
                        <div className="bottom">
                        {/* <img src={monolith} alt=""/> */}
                            {/* <h4>Get them for</h4>
                            <h2>$250</h2> */}
                        </div>
                    </div>
                </div>

                <div className="slide-right">
                    <div className="top">
                        <img src={afrasia} alt=""/>
                    </div>

                    <div className="bottom" id="rustic-slide">
                        {/* <a onClick={this.leftSlide} className="left-arrow">
                            <LeftArrow />
                        </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a> */}
                        <div className="products">
                            {
                                this.props.collections.length > 0 ?
                                    premium[0].products.map((product) => {
                                        console.log("colle")
                                        return (
                                            <Product
                                                addVariantToCart={this.props.addVariantToCart}
                                                client={this.props.client}
                                                key={Number(Object(product).id).toString()}
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
        )
    }
}

export default Slide
