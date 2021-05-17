import React, { Component, Fragment } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';
// import laces from './../../images/laces.png';
// import uhara_box from './../../images/uhara_box.png';
import $ from 'jquery';
import { Link } from 'react-router-dom';
// import DownArrow from './../utilities/DownArrow';
import Gallery from 'react-fullscreen-gallery';
import Popup from './../../utlilities/LearnPopUp';
import DonationPopUp from './../../utlilities/DonationPopUp';
import ImageGallery from 'react-image-gallery';
import LeftArrow from './../utilities/LeftArrow';
import CustomAlert from './../../utlilities/CustomAlert';
import RightArrow from './../utilities/RightArrow';
import TickIcon from './../../utlilities/TickIcon';
import SeeMoreIcon from './../utilities/SeeMoreIcon';
import Accessory from './Accessory';
import FreeShippingIcon from './../../utlilities/FreeShippingIcon';
import WarrantyIcon from './../../utlilities/WarrantyIcon';
import ShieldIcon from './../utilities/ShieldIcon';
import TruckIcon from './../utilities/TruckIcon';
import BoxIcon from './../utilities/BoxIcon';
// import PhotoSwipe from 'photoswipe/dist/photoswipe';
// import 'photoswipe/dist/photoswipe.css';
// import 'photoswipe/dist/default-skin/default-skin.css';
// import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
// import Gallery from './Gallery';
import Donation from './Donation';
import SizeDropdown from './SizeDropdown';
import DownArrow from '../utilities/DownArrow';
import { browserHistory } from 'react-router';
import shortid from 'shortid';

export class Content extends Component {
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
            popup: false,
            customAlert: false,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            color: "White",
            donation: false,
            warranty: false
        }
        // console.log(this.props.products)
        // console.log(this.props.products)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
        this.product = {};

    }

    // componentWillUnmount(){
    //     super.componentWillUnmount();
    //     this.backListener();
    // }

    componentDidUpdate() {
        if (this.props.changesWarranty)
            $(".warranty ul li").removeClass("active");
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

    openAlert = () => {
        this.setState({
            customAlert: !this.state.customAlert
        })
    }

    addtoCart = (e) => {

        if (this.state.variantId == "") {
            this.openAlert()
        } else
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

    showWarranty = () => {
        $(".warranty .bottom").slideToggle();
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

    rightSlide = () => {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        const t = this;
        var c = url.searchParams.get("id");
        var product = {};
        if (this.props.products.length != 0)
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });

        // console.log(Array(Object(product).images)[0].length)
        this.setState({
            id: this.state.id == Array(Object(product).images)[0].length ? 1 : this.state.id + 1
        }, function () {
            console.log(($(window).outerWidth() * 0.55) * (this.state.id - 1));
            // $(".ticks li").removeClass("active");
            // $(`#tick${this.state.id}`).addClass("active");
            console.log(t.state.id)
            $(".product-top .image-slider").animate({ scrollLeft: $(".product-top .image-slider").outerWidth() * (t.state.id - 1) }, 500);
        })
    }

    leftSlide = () => {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(Array(Object(product).images)[0].length)
        // 
        const t = this;
        var c = url.searchParams.get("id");
        var product = {};
        if (this.props.products.length != 0)
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
        this.setState({
            id: this.state.id == 1 ? Array(Object(product).images)[0].length : this.state.id - 1
        }, function () {
            // $(".ticks li").removeClass("active");
            // $(`#tick${this.state.id}`).addClass("active");
            $(".product-top .image-slider").animate({ scrollLeft: $(".product-top .image-slider").outerWidth() * (t.state.id - 1) }, 500);
        })
    }

    changeSize = () => {
        this.setState({
            sizes: !this.state.sizes
        })
    }

    openPopup = (x) => {
        this.setState({
            popup: !this.state.popup,
            accessory: x
        })
    }

    componentDidMount() {
        const t = this;
        // var now = new Date();
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var d = url.searchParams.get("collection");
        var _isMounted = true;
        // window.history.pushState(null, null, window.location.href);


        var countDownDate;
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("collection");
        if (c == "kalabar collection") {
            countDownDate = new Date("Aug 4, 2021").getTime();
        }
        else if (c == "Rustic Collection") {
            countDownDate = new Date("Aug 19, 2021").getTime();
        }
        else if (c == "upcoming collection") {
            countDownDate = new Date("Sep 4, 2021").getTime();
        }
        else if (c == "Defy Odds") {
            countDownDate = new Date("Sep 19, 2021").getTime();
        }
        console.log(c)
        // console.log(now.getDay());
        var x = setInterval(function () {

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

    pickColor = (e, i) => {
        $(".color-variants ul li").removeClass("active");
        $(e.target).addClass("active");
        this.setState({
            imageId: i,
            color: this.state.color == "White" ? "Off-white" : "White",
        })
    }

    pickOneColor = (e, i) => {
        // $(".color-variants ul li").removeClass("active");
        // $(e.target).addClass("active");
        // this.setState({
        //     imageId: i,
        //     color: this.state.color =="White"? "Off-white": "White",
        // })
    }

    addDonation = (e) => {

    }



    addWarranty = (e) => {
        var warranty = {};

        if (!this.state.warranty) {
            if (this.props.products.length != 0) {
                this.props.returnWarranty();
                console.log($(e.target).prop("tagName"))
                console.log($(e.target).parent().parent().prop("tagName"))
                console.log($(e.target).parent().parent().parent().parent().prop("tagName"))
                console.log($(e.target).parent().parent().parent().parent())
                warranty = this.props.products.find((x, i) => {
                    return x.title == "1 year warranty"
                });
                if ($(e.target).prop("tagName") == "LI")
                    $(e.target).addClass("active");
                if ($(e.target).prop("tagName") == "svg")
                    $(e.target).parent().addClass("active");
                else if ($(e.target).prop("tagName") == "g")
                    $(e.target).parent().parent().addClass("active");
                else if ($(e.target).prop("tagName") == "path")
                    $(e.target).parent().parent().parent().parent().addClass("active");

                this.props.addVariantToCart(warranty.variants[0].id, 1);
                this.setState({
                    warranty: true
                }, () => {

                })
            }
        }
        else {
            var lineItem = this.props.lineItems.find((x, i) => (
                x.title == "1 year warranty"
            ));
            if (this.props.products.length != 0) {
                if (lineItem != undefined) {
                    console.log($(e.target).prop("tagName"))
                    console.log($(e.target).parent().parent().parent().parent().prop("tagName"))
                    console.log($(e.target).parent().parent().parent().parent())
                    if ($(e.target).prop("tagName") == "LI")
                        $(e.target).removeClass("active");
                    if ($(e.target).prop("tagName") == "svg")
                        $(e.target).parent().removeClass("active");
                    else if ($(e.target).prop("tagName") == "g")
                        $(e.target).parent().parent().removeClass("active");
                    else if ($(e.target).prop("tagName") == "path")
                        $(e.target).parent().parent().parent().parent().removeClass("active");
                    // console.log(this.props.lineItems)
                    // this.props.removeWarranty(warranty.variants[0].id);
                    // this.props.lineItems.forEach((x,i)=> {
                    //     if(x.title == "1 year warranty"){
                    //         this.props.removeWarranty(x.id);
                    //     }
                    // })


                    this.props.removeWarranty(lineItem.id);
                    this.setState({
                        warranty: false
                    })
                }
            }
        }
    }

    openDonation = (e) => {
        this.setState({
            donation: !this.state.donation
        })
    }

    render() {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("id");
        var product = {};
        var donation = {};
        var warranty = {};
        var laces = {};
        var boxes = {};
        if (this.props.products.length != 0) {
            product = this.props.products.find((x, i) => {
                return x.id == c
            });

            donation = this.props.products.find((x, i) => {
                return x.title == "Donations"
            });

            warranty = this.props.products.find((x, i) => {
                return x.title == "1 year warranty"
            });

            laces = this.props.products.find((x, i) => {
                return x.title == "Leather laces"
            });
            // console.log(laces)

            boxes = this.props.products.find((x, i) => {
                return x.title == "Our signature gift box"
            });
        }
        var d = url.searchParams.get("collection");

        var collection = {};
        var products = []
        if (this.props.collections.length != 0) {
            var collection = this.props.collections.find((x, i) => {
                // console.log(x)
                return x.title == d
            });

            if (collection != undefined) {
                products = collection.products;
                products = products.filter((x, i) => {
                    return x.id != product.id
                })
            }
        }

        // console.log(products[0])
        let variantImage, boxImage, laceImage = {};

        variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        // boxImage = Array(Object(boxes).images)[0];
        // laceImage = Array(Object(laces).images)[0];
        // if(boxes!=undefined){
        //     boxImage = Array(boxes.images)[0];
        //     console.log(boxes)
        // }
        if (laces != undefined) {
            let laces_arr = laces.images;
            laceImage = laces.images == undefined ? null : laces.images[2]
            // console.log(laces.variants==undefined? null:laces.variants[0].id);
        }

        if (boxes != undefined) {
            let boxes_arr = boxes.images;
            boxImage = boxes.images == undefined ? null : boxes.images[2]
            // console.log(laces.variants==undefined? null:laces.variants[0].id);
        }

        let variants = [];
        // let variantQuantity = this.state.quantity || 1
        if (product != undefined) {
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

        if (variantImage != undefined) {
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
        //   alert()

        return (
            <Fragment>
                {
                    this.state.gallery ? <div className="fullscreen-gallery">
                        <Gallery images={images} />
                        <ul onClick={this.closeGallery} className="close-sticks">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                        : null
                }
                {
                    this.state.popup ? <Popup closePopup={this.openPopup}>
                        <Accessory accessory={this.state.accessory} products={this.props.products}
                            location={this.props.location} collection={d}
                            // laceid={this.state.accessory=="laces"? laces.variants==undefined? null:laces.variants[0].id:"899"}
                            boxid={this.state.accessory == "box" ? boxes.variants == undefined ? null : boxes.variants[0].id
                                : "899"}
                            //     src={laceImage == undefined? "":laceImage.src}
                            lace={laces}
                            box={boxes}
                            closePopup={this.openPopup}
                            client={this.props.client}
                            collections={this.props.collections}
                            addVariantToCart={this.props.addVariantToCart} />
                    </Popup> : null
                }
                {
                    this.state.customAlert ? <CustomAlert closePopup={this.openAlert}>
                        <h4>Please select a size</h4>
                    </CustomAlert> : null
                }

                {
                    this.state.donation ? <DonationPopUp closePopup={this.openDonation}>
                        <Donation id={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU5OTg0NjU5NDE2NTc="}
                            client={this.props.client}
                            product={donation}
                            closePopup={this.openDonation}
                            addVariantToCart={this.props.addVariantToCart} />
                    </DonationPopUp> : null
                }

                <div className="contents">
                    <div className="container">
                        <div className="countdown">
                            {
                                d=="upcoming collection" ?
                                <h4 className="disclaimer"><b>One-pair Edition Only</b> Preorder Before Deadline Below:</h4>
                                :
                                <h4 className="disclaimer"><b>One-pair Edition Only</b> Available For:</h4>
                            }
                                    {/* <h4 className="disclaimer"><b>One-pair Edition Only</b> Available For:</h4> */}
                                    
                            
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
                        <div className="product-top">
                            <a onClick={this.leftSlide} className="left-arrow">
                                <LeftArrow />
                            </a>
                            <a onClick={this.rightSlide} className="right-arrow">
                                <RightArrow />
                            </a>

                            

                            <div className="image-slider">
                                <h5>Only one pair made!</h5>
                                {
                                    variantImage == undefined ? null :
                                        variantImage.map((x, i) => (
                                            <div data-id={shortid.generate()} style={{
                                                backgroundImage: `url("${variantImage == undefined ? "" : variantImage[this.state.imageId == 2 ? variantImage.length - 1 : i].src}")`,
                                                backgroundPosition: d == "upcoming collection" ? "85% 75%" : "45% 100%",
                                                backgroundSize: "cover",
                                            }} className="product-img" alt="" />
                                        ))
                                }

                            </div>

                            <h4>
                                {Object(product).title === "Laughing Leopard" ? "Defy Leopard" : Object(product).title === "Hidden Crocodile" ? "Defy Crocodile" :
                                    Object(product).title === "Coiled Python" ? "Defy Python" : Object(product).title}
                            </h4>
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
                                 <h3 className="price">${parseInt(Object(Object(Array(Object(product).variants)[0])[0]).price)}</h3>
                                

                            </div>
                        </div>

                        <div className="collapsible">
                            <div className="top" onClick={(e) => { this.showShoe(e) }}>
                                <p>Shoe Description</p> <DownArrow />
                            </div>
                            <div className="bottom">
                                { 
                                    Object(product).title == "Kalabar North" ? <p>
                                        Kalabar North is available in either white or off-white leather. Premium genuine leather forms the entire
                                        body of this exquisitely handcrafted pair of shoes from our flagship Premium Collection. The sides and
                                        back of the shoe adorn this genuine leather form with an ancient luxurious fabric once reserved
                                        exclusively for the African nobility who ruled Old Kalabar. The designs on the fabric were carefully
                                        selected with embellishments of tortoise motifs representing the northern regions of these ancient
                                        lands. These shoes represent the finest attention to detail luxury of African craftsmanship.
                                    <ul>
                                            <li>Finest made in Africa hand craftsmanship</li>
                                            <li>Premium genuine leather</li>
                                            <li>Leather laces</li>
                                            <li>Cotton laces</li>
                                            <li>Luxury suede interior</li>
                                            <li>Durable rubber soles</li>
                                            <li>Rich blue and white African fabric adorned with traditional motifs</li>
                                            <li>Our signature gift box handcrafted with matching rich blue and white African fabric</li>
                                            <li>One-year warranty <Link to="policy">(See details)</Link></li>
                                            <li>
                                                Perfect size, choose your exact size
                                        </li>
                                        </ul>

                                    </p> :
                                        Object(product).title == "Kalabar South" ?
                                            <p>
                                                Kalabar South is available in white premium leather. Genuine leather forms the entire body of this
                                                exquisitely handcrafted pair of shoes from our flagship Premium Collection. The sides and back of the
                                                shoe adorn this genuine leather form with an ancient luxurious fabric once reserved exclusively for the
                                                African nobility who ruled Old Kalabar. The designs on the fabric were carefully selected with
                                                embellishments of fish motifs representing the riverine southern regions of this ancient place where
                                                great rivers meet and enter the Atlantic. These shoes represent the finest attention to detail luxury of
                                                African craftsmanship.
                                    <ul>
                                                    <li>Finest made in Africa hand craftsmanship</li>
                                                    <li>Premium genuine leather</li>
                                                    <li>Leather laces</li>
                                                    <li>Cotton laces</li>
                                                    <li>Luxury suede interior</li>
                                                    <li>Durable rubber soles</li>
                                                    <li>Rich blue and white African fabric adorned with traditional motifs</li>
                                                    <li>Our signature gift box handcrafted with matching rich blue and white African fabric</li>
                                                    <li>One-year warranty <Link to="policy">(See details)</Link></li>
                                                    <li>
                                                        Perfect size, choose your exact size
                                        </li>
                                                </ul>
                                            </p>
                                            :

                                            Object(product).title == "White Noise 301" ?
                                                <p>
                                                    White Noise 301 is available in off-white leather. Genuine leather forms the entire body of this elegantly handcrafted pair of shoes from our Urban Collection. The sides and back of the shoe adorn a light leather form with the popular Ankara fabric that characterizes much of contemporary African fashion. The third generation of our founding shoe piece, the colorful design on its Ankara fabric was carefully selected to reflect the pulsating energy, clashing sound and feverish chaos that can be found in almost any urban African congestion. These shoes represent the finest attention to detail luxury of African craftsmanship.

                                    <ul>
                                                        <li>Finest made in Africa hand craftsmanship</li>

                                                        <li>Genuine leather</li>
                                                        <li>Cotton laces</li>
                                                        <li>Luxury suede interior</li>
                                                        <li>Lush leather tongue padding for greater comfort</li>
                                                        <li>Durable rubber soles</li>
                                                        <li>White and greyish Ankara fabric adorned with chaotic, irregular circle motifs</li>
                                                        <li>
                                                            Perfect size, choose your exact size
                                        </li>
                                                    </ul>
                                                </p>
                                                :

                                                Object(product).title == "Afrasia Fire" ?
                                                    <p>
                                                        Afrasia Fire is available in black suede. Genuine suede forms the entire body of this elegantly handcrafted pair of shoes; which are the pride of our Urban Collection. The design of the shoe evokes the diversity and intercontinental dynamics of Africa and its historical interconnections to Asia. The sides and back of the shoe adorn a light suede form with the popular Ankara fabric that characterizes much of contemporary African fashion. The colorful design on its Ankara fabric was carefully selected to reflect a fiery burst of energetic, aesthetically pleasing multi-colors and the harmonious blending of red-hot musical notes that reflect the coming together of the best elements of multicultural diversity in almost any urban African melting pot. These shoes represent the finest attention to detail luxury of African craftsmanship.

                                    <ul>
                                                            <li>Finest made in Africa hand craftsmanship</li>

                                                            <li>Genuine leather</li>
                                                            <li>Cotton laces</li>
                                                            <li>Luxury suede interior</li>
                                                            <li>Durable rubber soles</li>
                                                            <li>Multi-colored Ankara fabric adorned with energetic, aesthetically blending yet chaotic fire motifs

                                        </li>


                                                            <li>
                                                                Perfect size, choose your exact size
                                        </li>
                                                        </ul>
                                                    </p>
                                                    :

                                                    Object(product).title == "Black Maze" ?
                                                        <p>
                                                            Black Maze is available in black suede. Genuine suede forms the entire body of this elegantly handcrafted pair of shoes, which form the third pillar and centerpiece of our Urban Collection. The design of the shoe evokes the unplanned maze-like complexity of many road networks in urban Africa. The sides and back of the shoe adorn a light suede form with the popular Ankara fabric that characterizes much of contemporary African fashion. The labyrinth-like design on its Ankara fabric was carefully selected to reflect the tangled, spontaneous intricacy of almost every African metropolis. These shoes represent the finest attention to detail luxury of African craftsmanship.

                                    <ul>
                                                                <li>Finest made in Africa hand craftsmanship</li>

                                                                <li>Genuine suede</li>
                                                                <li>Cotton laces</li>
                                                                <li>Luxury suede interior</li>
                                                                <li>Durable rubber soles</li>
                                                                <li>Black and white Ankara fabric adorned with irregular, tangled, and spontaneous maze motifs

                                        </li>


                                                                <li>
                                                                    Perfect size, choose your exact size
                                        </li>
                                                            </ul>
                                                        </p>
                                                        :
                                                        Object(product).title == "Defy Leopard" ?
                                                            <p>Laughing Leopard is available in white leather. Premium genuine leather forms the entire body of this exquisitely handcrafted pair of shoes from our one of a kind Defy Odds Adventure Collection. The toe cap, toe box and tongue of the shoe adorn this genuine leather form with the luxurious fabric once reserved exclusively for an ancient African nobility. The designs on the fabric were carefully selected with potent embellishments of the laughing leopard motif representing your unique personality type within this African worldview. These shoes represent the finest attention to detail luxury of African craftsmanship.
                                    <ul>
                                                                    <li>Finest made in African hand craftsmanship</li>
                                                                    <li>Premium genuine leather</li>
                                                                    <li>Leather laces</li>
                                                                    <li>Cotton laces</li>
                                                                    <li>Luxury suede interior</li>
                                                                    <li>Lush leather tongue padding for greater comfort</li>
                                                                    <li>Luxurious leather collar tongue padding for increased fit and comfort</li>
                                                                    <li>Air vents to support superior internal air distribution  and breathability </li>
                                                                    <li>Durable rubber soles</li>
                                                                    <li>Rich blue and white African fabric adorned with laughing leopard motif</li>
                                                                    <li>Our signature gift box handcrafted with matching rich blue and white African fabric </li>
                                                                    <li>One-year warranty <Link to="/policy">(See details)</Link></li>
                                                                </ul>

                                                            </p> :
                                                            Object(product).title == "Defy Python" ?
                                                                <p>Coiled Python is available in white leather. Premium genuine leather forms the entire body of this exquisitely handcrafted pair of shoes from our one of a kind Defy Odds Adventure Collection. The toe cap, toe box and tongue of the shoe adorn this genuine leather form with the luxurious fabric once reserved exclusively for an ancient African nobility. The designs on the fabric were carefully selected with potent embellishments of the coiled python motif representing your unique personality type within this African worldview. These shoes represent the finest attention to detail luxury of African craftsmanship.
                                    <ul>
                                                                        <li>Finest made in African hand craftsmanship</li>
                                                                        <li>Premium genuine leather</li>
                                                                        <li>Leather laces</li>
                                                                        <li>Cotton laces</li>
                                                                        <li>Luxury suede interior</li>
                                                                        <li>Lush leather tongue padding for greater comfort</li>
                                                                        <li>Luxurious leather collar tongue padding for increased fit and comfort</li>
                                                                        <li>Air vents to support superior internal air distribution  and breathability </li>
                                                                        <li>Durable rubber soles</li>
                                                                        <li>Rich blue and white African fabric adorned with coiled python motif</li>
                                                                        <li>Our signature gift box handcrafted with matching rich blue and white African fabric </li>
                                                                        <li>One-year warranty <Link to="/policy">(See details)</Link></li>
                                                                    </ul>

                                                                </p>
                                                                :

                                                                Object(product).title == "Defy Crocodile" ?
                                                                    <p>Hidden Crocodile is available in white leather. Premium genuine leather forms the entire body of this exquisitely handcrafted pair of shoes from our one of a kind Defy Odds Adventure Collection. The toe cap, toe box and tongue of the shoe adorn this genuine leather form with the luxurious fabric once reserved exclusively for an ancient African nobility. The designs on the fabric were carefully selected with potent embellishments of the clawed crocodile motif representing your unique personality type within this African worldview. These shoes represent the finest attention to detail luxury of African craftsmanship.
                                    <ul>
                                                                            <li>Finest made in African hand craftsmanship</li>
                                                                            <li>Premium genuine leather</li>
                                                                            <li>Leather laces</li>
                                                                            <li>Cotton laces</li>
                                                                            <li>Luxury suede interior</li>
                                                                            <li>Lush leather tongue padding for greater comfort</li>
                                                                            <li>Luxurious leather collar tongue padding for increased fit and comfort</li>
                                                                            <li>Air vents to support superior internal air distribution  and breathability </li>
                                                                            <li>Durable rubber soles</li>
                                                                            <li>Rich blue and white African fabric adorned with clawed crocodile motif</li>
                                                                            <li>Our signature gift box handcrafted with matching rich blue and white African fabric </li>
                                                                            <li>One-year warrant <Link to="/policy">(See details)</Link></li>
                                                                        </ul>

                                                                    </p> :
                                                                    <Fragment>
                                                                        <p>The Premium A in white leather are embellished with the turtle and fish motifs that represent a lost African artistic form of communication.
                                    <ul>
                                                                                <li>White leather</li>
                                                                                <li>Finest hand craftmanship</li>
                                                                                <li>Rubber sole</li>
                                                                                <li>Perfect size, choose your exact size</li>
                                                                                <li>You can accessorise with leather laces and our premium unboxing options</li>
                                                                            </ul>
                                                                            <h4>Shoe Material care</h4>
                                    Our products are made with carefully selected leather materials. Please handle with care for longer product life.
                                    <ul>
                                                                                <li>Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth</li>
                                                                                <li>Fill shoe with tissue paper to help maintain the shape and absorb humidity, then store in the provided fabric bag and box</li>
                                                                                <li>Clean with a soft, dry cloth or brush</li>
                                                                                <li>Do not machine wash</li>
                                                                            </ul>
                                                                        </p>
                                                                    </Fragment>
                                }

                            </div>
                        </div>

                        <div className="buttons">

                            {
                                d === "Defy Odds" ?
                                    <Fragment>
                                        <a href="" onClick={(e) => { e.preventDefault(); this.addtoCart(e) }} className="btn btn-black">Buy Now</a>
                                        <p><b>Or</b></p>
                                    <Link className="btn btn-black" to={{
                                        pathname: "/defy",
                                    }}>Discover Something More</Link>
                                    
                                    </Fragment>
                                    : 
                                    <Fragment>
                                        <a href="" onClick={(e) => { e.preventDefault(); this.openDonation(e) }} className="btn btn-transparent">Support Made In Africa</a>
                                        <a href="" onClick={(e) => { e.preventDefault(); this.addtoCart(e) }} className="btn btn-black">{d == "upcoming collection" ? "Preorder" : "Add To My Shopping Bag"}</a>
                                    </Fragment>
                                    
                            }

                            
                        </div>



                        {
                            d == "Defy Odds" ?
                                <div className="variants" style={{
                                    justifyContent: "center"
                                }}>
                                    <div className="sizes" >
                                        <h3 style={{
                                            textAlign: "center"
                                        }}>Size</h3>

                                        <li className="sizes-list">
                                            {
                                                variants == undefined ?
                                                    null :
                                                    variants.map((x, i) => {
                                                        // console.log(x.title.split(" / ")[1]);
                                                        if (Object(product).title == "Kalabar North") {
                                                            if (this.state.color == x.title.split(" / ")[1].replace(" ", ""))
                                                                return <a onClick={(e) => { e.preventDefault(); this.variantClick(e, x.id) }}>{x.title.split(" / ")[0]}</a>
                                                        }
                                                        else {
                                                            return <a onClick={(e) => { e.preventDefault(); this.variantClick(e, x.id) }}>{x.title}</a>
                                                        }
                                                    })
                                            }
                                            {/* <a onClick={this.changeSize} ><DownArrow/></a> */}
                                        </li>
                                    </div>
                                </div>
                                :
                                <div className="variants" style={{
                                    justifyContent: Object(product).title == "Kalabar South" ? "center" : "space-between"
                                }}>
                                    {/* <SizeDropdown variantClick={this.variantClick} variants={variants} /> */}
                                    <div className="sizes" >
                                        <h3 style={{
                                            //    textAlign: "center"
                                        }}>Size</h3>

                                        <li className="sizes-list">
                                            {
                                                variants == undefined ?
                                                    null :
                                                    variants.map((x, i) => {
                                                        // console.log(x.title.split(" / ")[1]);
                                                        if (Object(product).title == "Kalabar North") {
                                                            if (this.state.color == x.title.split(" / ")[1].replace(" ", ""))
                                                                return <a onClick={(e) => { e.preventDefault(); this.variantClick(e, x.id) }}>{x.title.split(" / ")[0]}</a>
                                                        }
                                                        else {
                                                            return <a onClick={(e) => { e.preventDefault(); this.variantClick(e, x.id) }}>{x.title}</a>
                                                        }
                                                    })
                                            }
                                            {/* <a onClick={this.changeSize} ><DownArrow/></a> */}
                                        </li>
                                    </div>
                                    {
                                        Object(product).title == "Kalabar North" ?
                                            <div className="color-variants">
                                                <h3>Color</h3>
                                                <ul>
                                                    <li onClick={(e) => { this.pickColor(e, 1) }} style={{ backgroundColor: "wheat" }}></li>
                                                    <li onClick={(e) => { this.pickColor(e, 2) }} style={{ backgroundColor: "white" }}></li>
                                                </ul>
                                            </div>
                                            :
                                            null
                                    }

                                    {
                                        d == "kalabar collection" ?
                                            null :
                                            <div className="warranty">
                                                <h3>1 Year Warranty <Link to="policy">(See more)</Link></h3>
                                                {/* <p>Click here to add a 1 year warranty to your package</p> */}
                                                <ul>
                                                    <li onClick={(e) => { this.addWarranty(e) }}>
                                                        <TickIcon />
                                                    </li>
                                                    {/* <li onClick={(e)=> {this.pickColor(e, 2)}} style={{backgroundColor: "white"}}></li> */}
                                                </ul>
                                            </div>}
                                </div>
                        }

                        <div className="accessories">
                            {
                                d == "kalabar collection" || d == "Defy Odds" ?
                                    <p>Your purchase includes</p> :
                                    d == "Rustic Collection" ?
                                        <p>Accessorize with these options</p> :
                                        d == "upcoming collection" ?
                                            <p>You need to pick one of the options to complete your preorder</p> : null
                            }
                            {/* <p>Shoes come with</p> */}
                            {
                                d == "kalabar collection" ?
                                    <div className="includes">
                                        <div className="text">
                                            <div className="img">
                                            <img onClick={(e) => { e.preventDefault(); this.showWarranty() }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/security-2_2_btbddf.png"} alt="" />
                                                <a href="" onClick={(e) => { e.preventDefault(); this.showWarranty() }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>One year limited warranty</small>
                                        </div>

                                        {/* <div className="text">
                                    <div className="img">
                                        <img onClick={(e)=>{e.preventDefault();this.openPopup("laces")}} src={laceImage == undefined? "":laceImage.src} alt=""/>
                                        <a href="" onClick={(e)=>{e.preventDefault();this.openPopup("laces")}} className="see-more"><SeeMoreIcon /></a> 
                                    </div>
                                    <small>Luxury leather laces</small>
                                </div> */}

                                        <div className="text gift">
                                            <div className="img">
                                                <img onClick={(e) => { e.preventDefault(); this.openPopup("box") }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/parcel_1_zqqs2r.png"} alt="" />
                                                <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("box") }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>Our signature gift box</small>
                                        </div>

                                        <div className="text">
                                            <div className="img">
                                            <img onClick={(e) => { e.preventDefault(); this.showWarranty() }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/truck_1_xymz6p.png"} alt="" />
                                                <a href="" onClick={(e) => { e.preventDefault(); this.showWarranty() }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>Free shipping</small>
                                        </div>
                                    </div> :
                                    d == "upcoming collection" ?
                                        <div className="urban-includes">
                                            {/* <div className="text">
                                    <div className="svg">
                                        <WarrantyIcon />
                                        <a href="" onClick={(e)=>{e.preventDefault();this.showWarranty()}} className="see-more"><SeeMoreIcon /></a>
                                    </div>
                                    <small>One year limited warranty</small>
                                    <p>${parseInt(Object(Object(Array(Object(warranty).variants)[0])[0]).price)}</p>
                                </div> */}

                                            <div className="text">
                                                <div className="img">
                                                    <img onClick={(e) => { e.preventDefault(); this.openPopup("laces") }} src={laceImage == undefined ? "" : laceImage.src} alt="" />
                                                    <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("laces") }} className="see-more"><SeeMoreIcon /></a>
                                                </div>
                                                <small>Luxury leather laces</small>
                                                <p>${parseInt(Object(Object(Array(Object(laces).variants)[0])[0]).price)}</p>
                                            </div>

                                            <div className="text gift">
                                                <div className="img">
                                                    <img onClick={(e) => { e.preventDefault(); this.openPopup("box") }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/parcel_1_zqqs2r.png"} alt="" />
                                                    <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("box") }} className="see-more"><SeeMoreIcon /></a>
                                                </div>
                                                <small>Our signature gift box</small>
                                                <p>${parseInt(Object(Object(Array(Object(boxes).variants)[0])[0]).price)}</p>
                                            </div>


                                        </div>
                                        :
                                        d == "Defy Odds" ?
                                        <div className="includes">
                                        <div className="text">
                                            <div className="img">
                                            <img onClick={(e) => { e.preventDefault(); this.showWarranty() }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/security-2_1_grkbza.png"} alt="" />
                                                <a href="" onClick={(e) => { e.preventDefault(); this.showWarranty() }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>Lifetime warranty</small>
                                        </div>

                                        <div className="text gift">
                                            <div className="img">
                                                <img onClick={(e) => { e.preventDefault(); this.openPopup("box") }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/parcel_1_zqqs2r.png"} alt="" />
                                                {/* <BoxIcon /> */}
                                                <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("box") }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>Our signature gift box</small>
                                        </div>

                                        <div className="text">
                                            <div className="svg">
                                            <img onClick={(e) => { e.preventDefault(); this.openPopup("box") }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/truck_1_xymz6p.png"} alt="" />
                                                <a href="" onClick={(e) => { e.preventDefault(); this.showWarranty() }} className="see-more"><SeeMoreIcon /></a>
                                            </div>
                                            <small>Free shipping</small>
                                        </div>
                                    </div>
                                            :
                                            <div className="urban-includes">
                                                <div className="text">
                                                    <div className="img">
                                                        <img onClick={(e) => { e.preventDefault(); this.openPopup("laces") }} src={laceImage == undefined ? "" : laceImage.src} alt="" />
                                                        <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("laces") }} className="see-more"><SeeMoreIcon /></a>
                                                    </div>
                                                    <small>Luxury leather laces</small>
                                                    <p>${parseInt(Object(Object(Array(Object(laces).variants)[0])[0]).price)}</p>
                                                </div>

                                                <div className="text gift">
                                                    <div className="img">
                                                        <img onClick={(e) => { e.preventDefault(); this.openPopup("box") }} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1621073050/parcel_1_zqqs2r.png"} alt="" />
                                                        <a href="" onClick={(e) => { e.preventDefault(); this.openPopup("box") }} className="see-more"><SeeMoreIcon /></a>
                                                    </div>
                                                    <small>Our signature gift box</small>
                                                    <p>${parseInt(Object(Object(Array(Object(boxes).variants)[0])[0]).price)}</p>
                                                </div>
                                            </div>
                            }
                        </div>


                        {
                            d == "upcoming collection" ?
                                null :
                                <div className="collapsible warranty">
                                    <div className="top" onClick={(e) => { this.showShipping(e) }}>
                                        <p>Shipping, Returns And Warranty</p> <DownArrow />
                                    </div>
                                    <div className="bottom">
                                        <h4><b>Shipping: </b></h4>
                                        {
                                            d == "kalabar collection" ?
                                                <p>Items will be shipped to you within 3-5 business days. Shipping is free for the Premium Collection. </p>
                                                : <p>Items will be shipped to you within 3-5 business days.</p>
                                        }

                                        <h4><b>Returns policy: </b></h4>
                                        <p>
                                            All return requests must be placed within 30 days from the day you have received the
                            order.<Link to="policy">(See full return policy here)</Link>

                                        </p>
                                        {d=="Defy Odds"?
                                        <Fragment>
                                            <h4><b>Lifetime Warranty: </b></h4>
                                        <p> <ul>
                                                <li>
                                                    <b>The Defy Odds® Guarantee is for the lifetime of the shoe.</b> Thisisáfrìkán will repair
your Defy Odds Collectible shoes if they are damaged or defective due to manufacturing
defects only. 
                                                </li>
                                                <li>
                                                If your shoes are covered under our warranty and we are unable to repair them, we will
issue a new Defy Odds pair from our insurance stock or issue a new pair of Thisisáfrìkán
shoes of your collection of choice
                                                </li>
                                                <li>
                                                Proof of Purchase is required to confirm the applicability of this lifetime warranty and
replacements can occur only once over the lifetime of the shoe. No monetary refund will
be issued.
                                                </li>
                                                <li>
                                                If you are not sure if your shoes are covered under the lifetime warranty please email
pictures of the top and bottom of both shoes to customer service at
support@thisisafrikan.com for review before mailing them in.
                                                </li>
                                            </ul>
                                            <Link to="policy">(See full warranty policy here)</Link>
                                        </p>
                                        </Fragment>
                                        :
                                        <Fragment>
                                        <h4><b>Lifetime Warranty: </b></h4>
                                        <p>The Premium Collection includes a full one-year warranty. Production defects and any other
                                            product imperfections with the exception of typical wear and tear or usage deterioration will involve a
                                            full replacement of your shoes. 
                                            <Link to="policy">(See full warranty policy here)</Link>
                                        </p></Fragment>
                                        }
                                        
                                    </div>
                                </div>
                        }
                        {
                            d == "upcoming collection" ?
                                null :
                                <Fragment>
                                    <div className="other-products">
                                        <h2>See The Rest Of The Collection</h2>

                                        <div className={`products ${d=="Defy Odds"? "defy-products": null}`}>
                                            {
                                                products.length == 0 ? null :
                                                    products.map((product, i) => {
                                                        return (
                                                            <Product
                                                                id={i}
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
                                </Fragment>
                        }
                        {
                            d == "kalabar collection" ?
                                <div className="prev-page">
                                    <Link to={{ pathname: "/collections", state: { collection: "Defy Odds" } }} className="text">
                                        Go To Defy Odds Collectibles
                                        </Link>
                                    <Link to={{ pathname: "/collections", state: { collection: "Rustic Collection" } }} className="text">
                                        Go To Urban Collection
                                        </Link>

                                    {/* <Link to={{ pathname: "/collections", state: { collection: "upcoming collection" } }} className="text">
                                        Go To Upcoming Collection
                                        </Link> */}
                                </div> :
                                d == "Rustic Collection" ?
                                    <div className="prev-page">
                                        <Link to={{ pathname: "/collections", state: { collection: "Defy Odds" } }} className="text">
                                        Go To Defy Odds Collectible
                                        </Link>
                                        <Link to={{ pathname: "/collections", state: { collection: "kalabar collection" } }} className="text">
                                            Go To Premium Collection
                                    </Link>

                                        {/* <Link to={{ pathname: "/collections", state: { collection: d == "upcoming collection" } }} className="text">
                                            Go To Upcoming Collection
                                    </Link> */}
                                    </div>
                                    :
                                    d == "Defy Odds" ?
                                        <div className="prev-page">
                                            <Link to={{ pathname: "/collections", state: { collection: "kalabar collection" } }} className="text">
                                                Go To Premium Collection
                                    </Link>

                                            <Link to={{ pathname: "/collections", state: { collection: "Rustic Collection" } }} className="text">
                                                Go To Urban Collection
                                        </Link>

                                            {/* <Link to={{ pathname: "/collections", state: { collection: d == "upcoming collection" } }} className="text">
                                                Go To Upcoming Collection
                                    </Link> */}
                                        </div>
                                        :
                                        d == "upcoming collection" ?
                                            <div className="prev-page">
                                                <Link to={{ pathname: "/collections", state: { collection: "Defy Odds" } }} className="text">
                                        Go To Defy Odds Collectible
                                        </Link>
                                                <Link to={{ pathname: "/collections", state: { collection: "kalabar collection" } }} className="text">
                                                    Go To Premium Collection
                                    </Link>

                                                <Link to={{ pathname: "/collections", state: { collection: "Rustic Collection" } }} className="text">
                                                    Go To Urban Collection
                                    </Link>
                                            </div>
                                            : null
                        }
                        {/* <div className="prev-page">
                                <Link to={{pathname: "/collections", state: { collection: d=="kalabar collection"? "Rustic Collection": d=="Rustic Collection"? "kalabar collection": "kalabar collection"}}} className="text">
                                    Go To Other Collection
                                </Link>

                                <Link to={{pathname: "/collections", state: { collection: d=="kalabar collection"? "Rustic Collection": d=="Rustic Collection"? "kalabar collection": "kalabar collection"}}} className="text">
                                    Go To Other Collection
                                </Link>
                            </div> */}

                        {/*  */}

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content
