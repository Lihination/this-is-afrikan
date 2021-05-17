import React, { Component, Fragment } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';
import gallery_1 from './../../images/gallery_1.png';
import gallery_2 from './../../images/gallery_2.png';
import gallery_3 from './../../images/gallery_3.png';
import gallery_4 from './../../images/gallery_4.png';
import $ from 'jquery';
import product_gif from './../../images/product-gif.gif';
import Gallery from 'react-fullscreen-gallery';
import ImageGallery from 'react-image-gallery';
// import PhotoSwipe from 'photoswipe/dist/photoswipe';
// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';
// import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
// import Gallery from './Gallery';

export class Content extends Component {
    constructor(props) {
        super(props);
        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
            product: {},
            variantId: "",
            imageId: 0,
            gallery: false
        }
        console.log(this.props.products)
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
        console.log(i)
        $("#product-about li").removeClass("active");
        $(e.target).parent().addClass("active");
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
    addtoCart = () => {
        if(this.state.variantId==""){
            alert("Please pick a size")
        }else
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

    render() {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("id");
        var product = {};
        if(this.props.products.length!=0)
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
        var d = url.searchParams.get("collection");
        console.log(d)
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

        console.log(products[0])
        let variantImage={}
        
        variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        let variants = []
        // let variantQuantity = this.state.quantity || 1
        if(product!=undefined){
            variants = product.variants
        }

        var images = [
            {
              imageUrl: require('./../../images/collection.png'),
              thumbnailUrl: require('./../../images/collection.png'),
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
                console.log(x.src)
                images.push({
                      imageUrl: x.src,
                      thumbnailUrl: x.src,
                      title: '',
                      alt: '',
                    })
            });
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
            
            <div className="content">
                <div className="container">
                    <div className="body">
                        <div className="inner">
                            <div className="product">
                                <div className="product-left">
                                    <div className="product-top">
                                        <img className="product-img" src={variantImage == undefined?"":  variantImage[this.state.imageId].src} alt="" />
                                        <div className="gallery">
                                            {
                                                variantImage==undefined? null:
                                                variantImage.map((x,i)=> (
                                                    <img onMouseEnter={()=>this.onMouseEnter(i)} onClick={this.openGallery} 
                                                        onMouseLeave={()=>this.onMouseLeave(i)}  src={x.src} alt="" />
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="product-bottom">
                                        <h4>Sizes</h4>
                                        <ul id="product-about" className="sizes">
                                            {
                                                variants == undefined?
                                                    null :
                                                    variants.map((x,i)=> (
                                                        <li><a onClick={(e) => this.variantClick(e, x.id)}>{x.title}</a></li>
                                                    ))
                                            }
                                            {/* <li><a href="#">40</a></li>
                                            <li><a href="#">41</a></li>
                                            <li><a href="#">42</a></li>
                                            <li className="active"><a href="#">43</a></li>
                                            <li><a href="#">44</a></li>
                                            <li><a href="#">45</a></li> */}
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-right">
                                    <h2>{Object(product).title}</h2>
                                    <p>
                                        {Object(product).description}
                                    </p>
                                    <h3>${Object(Object(Array(Object(product).variants)[0])[0]).price}</h3>
                                    <div className="quantity">
                                        <a onClick={this.minus} className="minus">-</a>
                                        <h4>{this.state.quantity}</h4>
                                        <a onClick={this.plus} className="plus">+</a>
                                    </div>
                                    <a onClick={() => this.addtoCart()}
                                        className="btn btn-black">ADD TO CART</a>
                                    <a href="#" className="btn btn-green">CHECKOUT NOW</a>
                                </div>
                            </div>

                            <div className="other-products">
                                <h4>Other products in this collection</h4>

                                <div className="products">
                                    {
                                        products.length==0? null:
                                        products.map((product) => {
                                            return (
                                                <Product
                                                    addVariantToCart={this.props.addVariantToCart}
                                                    client={this.props.client}
                                                    key={Number(product.id).toString()}
                                                    product={product}
                                                    collection={d}
                                                />
                                            )
                                        })
                                    }
                                    {/* <div className="see-more">
                                        <a href="#" className="btn btn-green">SEE MORE</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Content
