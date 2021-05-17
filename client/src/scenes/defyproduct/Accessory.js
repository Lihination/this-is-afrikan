import React, { Component, Fragment } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';

import $ from 'jquery';

import {Link} from 'react-router-dom';
// import DownArrow from './../utilities/DownArrow';
// import product_gif from './../../images/product-gif.gif';
import Gallery from 'react-fullscreen-gallery';
import Popup from './../../utlilities/Popup';
// import laces from './../../images/laces.png';
// import uhara_box from './../../images/uhara_box.png';
// import unboxing from './../../images/unboxing.mp4';
import ImageGallery from 'react-image-gallery';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import SizeDropdown from './SizeDropdown';
import DownArrow from '../utilities/DownArrow';
import { browserHistory } from 'react-router';

export class Accessory extends Component {
    constructor(props) {
        super(props);
        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
            product: {},
            variantId: "",
            imageId: 0,
            gallery: false,
            id: 1,
            sizes: false,
        }
        // console.log(this.props.products)
        // console.log(this.props.products)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
        this.product = {}
    }

    componentDidUpdate(){
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

        // if(this.state.variantId==""){
        //     alert("Please pick a size")
        // }else
            this.props.addVariantToCart(this.state.variantId, this.state.quantity)
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
        if($(e.target).prop("tagName") =="P")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();   
            
        if($(e.target).prop("tagName") =="P")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".top").toggleClass("active");
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".top").toggleClass("active");   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".top").toggleClass("active");   
    }

    showShipping = (e) => {
        if($(e.target).prop("tagName") =="P")
            $(e.target).parent().parent().find(".bottom").slideToggle();
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".bottom").slideToggle();
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".bottom").slideToggle();   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".bottom").slideToggle();   
            
        if($(e.target).prop("tagName") =="P")
            $(e.target).parent().parent().find(".top").toggleClass("active");
        else if($(e.target).prop("tagName") =="DIV")
            $(e.target).parent().find(".top").toggleClass("active");
        if($(e.target).prop("tagName") =="svg")
            $(e.target).parent().parent().find(".top").toggleClass("active");   
        if($(e.target).prop("tagName") =="path")
            $(e.target).parent().parent().parent().parent().find(".top").toggleClass("active");    
  }
    
  rightSlide = () => {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    // console.log(window.location.href)
    // 
    const t = this;
    var c = this.props.id;
    var product = {};
    if(this.props.products.length!=0)
        product = this.props.products.find((x, i) => {
            // console.log(x)
            return x.id == c
        });

    // console.log(Array(Object(product).images)[0].length)
    this.setState({
        id: this.state.id == Array(Object(product).images)[0].length ? 1 : this.state.id + 1
    }, function () {
        console.log(($(window).outerWidth() * 0.6 ) * (this.state.id - 1));
        // $(".ticks li").removeClass("active");
        // $(`#tick${this.state.id}`).addClass("active");
        // console.log($(".product .image-slider"))
        $(".product-top .image-slider").animate({ scrollLeft: ($(window).outerWidth() * 0.6 ) * (this.state.id - 1) }, 500);
    })
}

leftSlide = () => {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    // console.log(Array(Object(product).images)[0].length)
    // 
    var c = this.props.id;
    var product = {};
    if(this.props.products.length!=0)
        product = this.props.products.find((x, i) => {
            // console.log(x)
            return x.id == c
        });
    this.setState({
        id: this.state.id == 1 ? Array(Object(product).images)[0].length : this.state.id - 1
    }, function () {
        // $(".ticks li").removeClass("active");
        // $(`#tick${this.state.id}`).addClass("active");
        $(".product-top .image-slider").animate({ scrollLeft: ($(window).outerWidth() * 0.6 ) * (this.state.id - 1) }, 500);
    })
}

changeSize=()=> {
    this.setState({
        sizes: !this.state.sizes
    })
}

    render() {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
         
        var c = this.props.id;
        var product = {};
        if(this.props.products.length!=0)
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
        var d = url.searchParams.get("collection");
        
        var collection = {};
        var products=[]
        if(this.props.collections.length!=0){
            var collection = this.props.collections.find((x, i) => {
                // console.log(x)
                return x.title == d
            });
            
            if(collection != undefined){
                products = collection.products;
                products = products.filter((x,i)=> {
                    return x.id != product.id
                })  
            }
        }

        // console.log(products[0])
        let variantImage={}
        
        variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        let variants = []
        // let variantQuantity = this.state.quantity || 1
        if(product!=undefined){
            variants = product.variants
        }

        var images = [
            {
              imageUrl: 'https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215716/collection_x2ooz9.png',
              thumbnailUrl: 'https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215716/collection_x2ooz9.png',
              title: 'Image 01',
              alt: 'Image 01',
            },
            // {
            //   imageUrl: require('../img/02.jpg'),
            //   thumbnailUrl: require('../img/02-thumb.jpg'),
            //   title: 'Image 02',
            //   alt: 'Image 02',
            // },
          ];

          if(variantImage!=undefined){
            images.pop();
            variantImage.forEach((x, i) => {
                // console.log(x.src)
                images.push({
                      imageUrl: x.src,
                      thumbnailUrl: x.src,
                      title: '',
                      alt: '',
                    })
            });
          }

          const style={
            //   backgroundImage: `url("${variantImage == undefined?"":  variantImage[this.state.imageId].src}")`
            backgroundImage: `url("${variantImage == undefined?"":  variantImage[this.state.imageId].src}")`
          }

          
        
        return (
            <Fragment>
                {
                    this.state.gallery ? <div className="fullscreen-gallery">
                                            <Gallery images={images}  />
                                            <ul onClick={this.closeGallery} className="close-sticks">
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                        : null
                }
            
            <div className="contents">
                <div className="container">
                    <a onClick={this.leftSlide} className="left-arrow">
                        <LeftArrow />
                    </a>
                        <a onClick={this.rightSlide} className="right-arrow">
                            <RightArrow />
                        </a>
                    <div className="product-top">
                        {/* <div className="image-slider">
                            {
                                variantImage==undefined? null:
                                variantImage.map((x,i)=> (
                                        <div style={{
                                            backgroundImage: `url("${variantImage == undefined?"":  variantImage[i].src}")`
                                        }} className="product-img" alt="" />
                                    ))
                            }
                            
                        </div> */}
                        {
                            this.props.accessory=="laces"?
                            <div style={{
                                backgroundImage: `url("${this.props.lace.images[2].src}")`
                            }} className="product-img" alt="" />
                            : <video id="boxVideo" autoPlay="autoplay" muted="muted">
                            <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1615215681/unboxing_o4unfa.mp4"} type="video/mp4" />
                        </video>
                        }
                        
                        
                        {
                                this.props.accessory=="laces"?
                                <h4> Genuine leather laces</h4>
                                : <h4>Shoe box</h4>
                            }

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
                            {/* <h3 className="price">${Object(Object(Array(Object(product).variants)[0])[0]).price}</h3> */}
                        </div>
                    </div>

                    {/* <div className="buttons">
                        <SizeDropdown variantClick={this.variantClick} variants={variants} />
                        {
                            this.state.sizes ?
                                <li className="sizes-list">
                                {
                                    variants == undefined?
                                        null :
                                            variants.map((x,i)=> (
                                            <a onClick={(e) => {e.preventDefault();this.variantClick(e, x.id)}}>{x.title}</a>
                                        ))
                                    }
                                    <a onClick={this.changeSize} ><DownArrow/></a>
                                </li>
                                
                            : <div onClick={this.changeSize} className="size-drop">
                            <span>Select Your Size</span>
                            <DownArrow />
                        </div>
                        }
                        <a href="" onClick={(e) =>{e.preventDefault(); this.addtoCart(e)}} className="btn btn-black">Add To My Shopping Bag</a>
                    </div> */}

                    <div className="collapsible">
                        <div className="top" onClick={(e)=> {this.showShoe(e)}}>
                            {this.props.accessory=="laces"?<p>Lace Description</p>: <p>Shoe Box Description</p>  } <DownArrow />
                        </div>
                        <div className="bottom">
                        {
                            this.props.accessory=="laces"?
                                <p>Premium leather laces in white and blue leather.</p>
                                : this.props.accessory=="box"?
                                <p>This. Is. Afrikan but a box, perfect for sending our shoes to friends, colleagues and loved ones.</p>
                                : null
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Accessory
