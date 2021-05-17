import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Product from './Product';
import monolith from './../../images/monolith.png';
import $ from 'jquery';

export class Premium extends Component {

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
        $("#premium-slide .products").animate({ scrollLeft: -200 }, 100);
    }

    leftSlide() {
        $("#premium-slide .products").animate({ scrollLeft: 200 }, 100);
    }

    render() {
        // console.log(this.props.client)
        // console.log(this.props.products);
        var premium = this.props.collections.filter((x, i) => {
            return x.title == "premium collection"
        })
        if (this.props.collections.length > 0) {
            console.log(premium[0].products[0])
        }

        return (
            <div className="premium" id={`slide${this.props.id}`}>
                <div className="slide-left">
                    
                    <div className="wrapper">
                        <div className="top">
                            <h1>{this.props.title}</h1>
                            <p>
                            Inspired by the sensuous city from whence it gets its name, this collection is made from an ancient premium fabric once reserved exclusively for the likes of the African nobility who ruled that area. These shoes are art pieces representing the modern day expression of its bacchanal energy, unbridled revelry and ecstatic carnival. This is New World African.

                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="slide-right">
                    <div className="top">
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
                                    premium[0].products.map((product) => {
                                        return (
                                            <Product
                                                addVariantToCart={this.props.addVariantToCart}
                                                client={this.props.client}
                                                key={Number(Object(product).id).toString()}
                                                product={product}
                                                collection="premium collection"
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

export default Premium
