import React, { Component } from 'react';
import product_gif from './../../images/product-gif.gif';
import gallery_1 from './../../images/gallery_1.png';
import gallery_2 from './../../images/gallery_2.png';
import gallery_3 from './../../images/gallery_3.png';
import BackIcon from './../utilities/BackIcon';
// import Body from './Body';
// import Bid from './Bid';
import gallery_4 from './../../images/gallery_4.png';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import $ from 'jquery';

export class Body extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
            days: 0,
            hours: 0,
            minutes: 0,
            variantId: "",
            imageId: 0
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

    plus = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    }

    variantClick = (e, i) => {
        console.log(i)
        $("#dashboard-variants li").removeClass("active");
        $(e.target).parent().addClass("active");
        this.setState({
            variantId: i
        })
    }

    onMouseEnter = (i) => {
        this.setState({
            imageId: i
        })
    }
    onMouseLeave = (i) => {
        this.setState({
            imageId: 0
        })
    }

    addtoCart = () => {
        if(this.state.variantId==""){
            alert("Please pick a size")
        }else
            this.props.addVariantToCart(this.state.variantId, this.state.quantity)
    }

    minus = () => {
        this.setState({
            quantity: this.state.quantity == 1 ? this.state.quantity : this.state.quantity - 1,
        })
    }
    render() {
        var product= {};
        let variantImage = {};
        let variants = [];
        if(this.props.answer!="undefined")
            if(this.props.products.length!=0)
            {
                product = this.props.products.filter((x,i)=>{
                    return x.title == this.props.answer
                })[0]
                // let variantImage={}
        // console.log(
            }
            variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        // let variants = []
        // let variantQuantity = this.state.quantity || 1
        if(product!=undefined){
            variants = product.variants
        }
        console.log(variantImage)

        return (
            <div className="body">
                <div className="inner">
                {/* <a onClick={()=>this.props.pageChange("overview", "what")} className="back">
                    <BackIcon />
                    <span>Overview</span>
                </a> */}
                    <div className="product">
                        <div className="product-inner">
                            <div className="product-left">
                                <div className="product-top">
                                    <img className="product-img" src={variantImage == undefined?"": variantImage[this.state.imageId].src} alt="" />
                                    <div className="gallery">
                                        {
                                            variantImage==undefined? null:
                                            variantImage.map((x,i)=> (
                                                <img onMouseEnter={()=>this.onMouseEnter(i)} 
                                                        onMouseLeave={()=>this.onMouseLeave(i)}  src={x.src} alt="" />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="product-bottom">
                                    <h4>Sizes</h4>
                                    <ul id="dashboard-variants" className="sizes">
                                    {
                                                variants == undefined?
                                                    null :
                                                    variants.map((x,i)=> (
                                                        <li><a onClick={(e) => this.variantClick(e, x.id)}>{x.title}</a></li>
                                                    ))
                                            }

                                    </ul>
                                </div>
                            </div>

                            <div className="product-right">
                                <h2>You are a {this.props.answer}</h2>
                                <p>
                                    {Object(product).description}
                                        </p>
                                {/* <h3>${Object(Object(Array(Object(product).variants)[0])[0]).price}</h3> */}
                                <div className="quantity">
                                    <a onClick={this.minus} className="minus">-</a>
                                    <h4>{this.state.quantity}</h4>
                                    <a onClick={this.plus} className="plus">+</a>
                                </div>
                                {/* <div className="countdown">
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
                                    </ul> */}
                                {/* </div> */}
                                <div className="buttons">
                                    <a href="#" className="btn btn-black">Bid now</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
