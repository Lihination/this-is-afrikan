import React, { Component, Fragment } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';

// import unboxing from './../../images/unboxing.mp4';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Gallery from 'react-fullscreen-gallery';
// import laces from './../../images/laces.png';
import SizeDropdown from './SizeDropdown';
import DownArrow from '../utilities/DownArrow';
import { browserHistory } from 'react-router';
import CustomAlert from './../../utlilities/CustomAlert';
export class Accessory extends Component {
    constructor(props) {
        super(props);
        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
            product: {},
            variantId: "",
            imageId: 1,
            gallery: false,
            id: 1,
            sizes: false,
            color: "White",
            variantId: "",
            customAlert: false,
        }
        // console.log(this.props.products)
        // console.log(this.props.products)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
        this.product = {}
    }

    componentDidUpdate() {
        // console.log(this.props.products)
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("id");
        var product = Array(this.props.products).find((x, i) => {
            return x.id == c
        });
        // this.setState({
        //     product: product
        // })
        this.product = product;
    }

    componentDidMount = () => {

    }

    findImage(images, variantId) {
        const primary = images[0];

        const image = images.filter(function (image) {
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    handleQuantityChange(event) {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    variantClick = (e, i) => {
        console.log(e.target)
        $(".sizes-list a").removeClass("active");
        $(e.target).addClass("active");
        this.setState({
            variantId: i
        })
    }

    plus = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    }

    minus = () => {
        this.setState({
            quantity: this.state.quantity == 1 ? this.state.quantity : this.state.quantity - 1,
        })
    }
    addtoCart = (e) => {
        if (this.state.variantId == "") {

        }
        else {
            if (this.props.accessory == "laces") {
                this.props.addVariantToCart(this.state.variantId, 1);
                this.props.closePopup();
            }
            else if (this.props.accessory == "box") {
                this.props.addVariantToCart(this.props.boxid, 1);
                this.props.closePopup();
            }
        }
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

    closeGallery = () => {
        this.setState({
            gallery: false
        })
    }

    openGallery = () => {
        this.setState({
            gallery: true
        })
    }

    showShoe = (e) => {
        console.log($(e.target).prop("tagName"))
        if ($(e.target).prop("tagName") == "P")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if ($(e.target).prop("tagName") == "DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if ($(e.target).prop("tagName") == "svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        if ($(e.target).prop("tagName") == "path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();

        if ($(e.target).prop("tagName") == "P")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        else if ($(e.target).prop("tagName") == "DIV")
            $(e.target).parent().find(".top").toggleClass("active");
        if ($(e.target).prop("tagName") == "svg")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        if ($(e.target).prop("tagName") == "path")
            $(e.target).parent().parent().parent().parent().find(".top").toggleClass("active");
    }

    showShipping = (e) => {
        if ($(e.target).prop("tagName") == "P")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if ($(e.target).prop("tagName") == "DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if ($(e.target).prop("tagName") == "svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        if ($(e.target).prop("tagName") == "path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();

        if ($(e.target).prop("tagName") == "P")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        else if ($(e.target).prop("tagName") == "DIV")
            $(e.target).parent().find(".top").toggleClass("active");
        if ($(e.target).prop("tagName") == "svg")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        if ($(e.target).prop("tagName") == "path")
            $(e.target).parent().parent().parent().parent().find(".top").toggleClass("active");
    }

    changeSize = () => {
        this.setState({
            sizes: !this.state.sizes
        })
    }

    pickColor = (e, i, id) => {
        $(".accessory-variants .color-variants ul li").removeClass("active");
        $(e.target).addClass("active");
        console.log(this.state.imageId - i);
        var img = this.state.imageId;

        this.setState({
            imageId: i,
            variantId: id,
        }, () => {
            $(".accessory .image-slider").animate({ scrollLeft: $(".accessory .image-slider").outerWidth() * (2 - i) }, 500);
        })
    }

    openAlert = () => {
        this.setState({
            customAlert: !this.state.customAlert
        })
    }

    render() {
        console.log(this.props.collection)
        return (
            <Fragment>
                {/* {
                    this.state.gallery ? <div className="fullscreen-gallery">
                                            <Gallery images={images}  />
                                            <ul onClick={this.closeGallery} className="close-sticks">
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                        : null
                } */}
                {
                    this.state.customAlert ? <CustomAlert closePopup={this.openAlert}>
                        <h4>Please select a size</h4>
                    </CustomAlert> : null
                }


                {/* <a onClick={this.leftSlide} className="left-arrow">
                        <LeftArrow />
                    </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a> */}
                <div className="accessory">
                    <div className="product-top ">
                        <div className="image-slider">
                            {
                                this.props.collection == "kalabar collection" ?

                                    this.props.accessory == "laces" ?

                                        this.props.lace == undefined ? null :

                                            <div style={{
                                                backgroundImage: `url("${this.props.lace.images[2].src}")`
                                            }} className="product-img" alt="" />


                                        :
                                        <div className="video">
                                            <video id="boxVideo" autoPlay="autoplay" loop>
                                                {
                                                    this.props.collection == "kalabar collection" || this.props.collection == "Defy Odds" ?
                                                        <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1620302152/22_bmw4mi.mp4"} type="video/mp4" />
                                                        :
                                                        this.props.collection == "Rustic Collection" || this.props.collection == "upcoming collection" ?
                                                            <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1620302217/11_gf2avf.mp4"} type="video/mp4" />
                                                            : null
                                                }
                                            </video>
                                        </div>

                                    :

                                    this.props.accessory == "laces" ?

                                        this.props.lace == undefined ? null :
                                            this.props.lace.images.map((x, i) => (
                                                <div style={{
                                                    backgroundImage: `url("${x.src}")`
                                                }} className="product-img" alt="" />
                                            ))

                                        : <div className="video">
                                            <video id="boxVideo" autoPlay="autoplay" loop>
                                                {
                                                    this.props.collection == "kalabar collection" || this.props.collection == "Defy Odds" ?
                                                        <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1620302152/22_bmw4mi.mp4"} type="video/mp4" />
                                                        :
                                                        this.props.collection == "Rustic Collection" || this.props.collection == "upcoming collection" ?
                                                            <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1620302217/11_gf2avf.mp4"} type="video/mp4" />
                                                            : null
                                                }
                                            </video>
                                        </div>

                            }
                        </div>
                        

                        <div className="bottom">
                            {/* <div className="gallery">
                                {
                                    variantImage==undefined? null:
                                    variantImage.map((x,i)=> (
                                        <img onMouseEnter={()=>this.onMouseEnter(i)} onClick={this.openGallery} 
                                            onMouseLeave={()=>this.onMouseLeave(i)}  src={x.src} alt="" />
                                        ))
                                }
                            </div> */}
                            {
                            this.props.accessory == "laces" ?
                                <h4>Genuine leather laces</h4>
                                : <h4>Shoe box</h4>
                            }
                            {
                                this.props.collection == "Rustic Collection" || this.props.collection == "upcoming collection"?
                                    <h3 className="price">${this.props.accessory=="laces"? "25": "50"}</h3>
                                : null
                            }
                            
                        </div>
                    </div>
                    <div className="contents">
                        <div className="container">
                            {
                                this.props.collection == "Rustic Collection" ?
                                    <div className="accessory-buttons">
                                        <a href="" onClick={(e) => { e.preventDefault(); this.addtoCart(e) }} 
                                        className={`btn btn-black urban`}>
                                            {this.props.collection=="upcoming collection"?"Preorder":
                                             "Add To My Shopping Bag"}</a>
                                    </div>
                                    : null
                            }

                            {
                                this.props.collection == "kalabar collection" ?
                                    null
                                    : this.props.accessory == "laces" ?
                                        <div className="accessory-variants">
                                            <div className="color-variants">
                                                <h3>Color</h3>
                                                <ul>
                                                    {
                                                        this.props.lace == undefined ?
                                                            null :
                                                            this.props.lace.variants.map((x, i) => (
                                                                <li onClick={(e) => { this.pickColor(e, i, x.id) }} style={{ backgroundColor: x.title }}></li>
                                                            ))
                                                    }

                                                    {/* <li onClick={(e)=> {this.pickColor(e, 2)}} style={{backgroundColor: "white"}}></li> */}
                                                </ul>
                                            </div>
                                        </div> : null
                            }

                            <div className={`collapsible ${this.props.collection=="Rustic Collection"
                            ||this.props.collection=="upcoming Collection"? "urban": "premium"}`}>
                                <div className="top" onClick={(e) => { this.showShoe(e) }}>
                                    {this.props.accessory == "laces" ? <p>Lace Description</p> : <p>Shoe Box Description</p>} <DownArrow />
                                </div>
                                <div className="bottom">
                                    {
                                        this.props.accessory == "laces" ?
                                            <p>Premium leather laces in white and blue leather.</p>
                                            : this.props.accessory == "box" ?
                                                <p>This. Is. Afrikan but a box, perfect for sending our shoes to friends, colleagues and loved ones.</p>
                                                : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Accessory
