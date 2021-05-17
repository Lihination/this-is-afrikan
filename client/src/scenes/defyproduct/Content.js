import React, { Component, Fragment } from 'react';
import RightCaret from './../utilities/RightCaret';
import Product from './Product';
import $ from 'jquery';
// import laces from './../../images/laces.png';
// import uhara_box from './../../images/uhara_box.png';
import {Link} from 'react-router-dom';
import CustomAlert from './../../utlilities/CustomAlert';
import LearnPopUp from './../../utlilities/LearnPopUp';
import Gallery from 'react-fullscreen-gallery';
import Popup from './../../utlilities/Popup';
import ImageGallery from 'react-image-gallery';
import LeftArrow from './../utilities/LeftArrow';
import RightArrow from './../utilities/RightArrow';
import Accessory from './Accessory';
import SeeMoreIcon from './../utilities/SeeMoreIcon';
import FreeShippingIcon from './../../utlilities/FreeShippingIcon';
import WarrantyIcon from './../../utlilities/WarrantyIcon';
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
            accessory: "",
            customAlert: false,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        // console.log(this.props.products)
        // console.log(this.props.products)
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
        this.product = {}
    }
    openAlert = ()=> {
        this.setState({
            customAlert: !this.state.customAlert
        })
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

    componentDidMount() {
        const t = this;
        // var now = new Date();
        var countDownDate = new Date("Jul 19, 2021").getTime();
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

        if(this.state.variantId==""){
            this.openAlert()
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

    showWarranty=()=> {
        $("#product").animate({
            scrollTop: $(".warranty").offset().top
        }, 500)
        $(".warranty .bottom").slideToggle();
        console.log($(".warranty").offset().top)
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
    var c = url.searchParams.get("id");
    var product = {};
    if(this.props.products.length!=0){
        product = this.props.products.find((x, i) => {
            // console.log(x)
            return x.id == c
        });
        console.log(product)

        this.setState({
            id: this.state.id == product.images.length ? 1 : this.state.id + 1
        }, function () {
            console.log(($(window).outerWidth() * 0.6 ) * (this.state.id - 1));
            // $(".ticks li").removeClass("active");
            // $(`#tick${this.state.id}`).addClass("active");
            console.log($(".product .image-slider"))
            $(".product-top .image-slider").animate({ scrollLeft: ($(window).outerWidth() * 0.6 ) * (this.state.id - 1) }, 500);
        })

    }

    // console.log(Array(Object(product).images)[0].length)
    
}

leftSlide = () => {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    // console.log(Array(Object(product).images)[0].length)
    // 
    var c = url.searchParams.get("id");
    var product = {};
    if(this.props.products.length!=0){
        product = this.props.products.find((x, i) => {
            // console.log(x)
            return x.id == c
        });
        console.log(product)
        this.setState({
            id: this.state.id == 1 ? product.images.length : this.state.id - 1
        }, function () {
            // $(".ticks li").removeClass("active");
            // $(`#tick${this.state.id}`).addClass("active");
            $(".product-top .image-slider").animate({ scrollLeft: ($(window).outerWidth() * 0.6 ) * (this.state.id - 1) }, 500);
        })
    }
}

changeSize=()=> {
    this.setState({
        sizes: !this.state.sizes
    })
}

openPopup = (x) => {
    // e.preventDefault()
    this.setState({
        popup: !this.state.popup,
        accessory: x
    })
}

pickOneColor=(e,i)=> {
    // $(".color-variants ul li").removeClass("active");
    // $(e.target).addClass("active");
    // this.setState({
    //     imageId: i,
    //     color: this.state.color =="White"? "Off-white": "White",
    // })
}

addDonation = (e) => {

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
        var laces = {};
        var boxes = {};
        var donation = {};
        if(this.props.products.length!=0){
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
            donation = this.props.products.find((x, i) => {
                // console.log(x.title)
                return x.title == "Donations"
            });
            laces = this.props.products.find((x, i) => {
                return x.title == "Leather laces"
            });
            boxes = this.props.products.find((x, i) => {
                return x.title == "Our signature gift box"
            });
        }
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
        let variantImage, boxImage, laceImage ={};
        
        variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        let variants = []
        // let variantQuantity = this.state.quantity || 1
        if(product!=undefined){
            variants = product.variants
        }//

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

          if(laces!=undefined){
            let laces_arr = laces.images;
            laceImage = laces.images==undefined? null: laces.images[2]
            // console.log(laces.variants==undefined? null:laces.variants[0].id);
        }

        if(boxes!=undefined){
            let boxes_arr = boxes.images;
            boxImage = boxes.images==undefined? null: boxes.images[2]
            // console.log(laces.variants==undefined? null:laces.variants[0].id);
        }

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

{
                this.state.popup ? <Popup closePopup={this.openPopup}>
                                    <Accessory accessory={this.state.accessory} products={this.props.products}
                                        location={this.props.location}
                                        id={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU5OTg0NjU5NDE2NTc="}
                                        client={this.props.client}
                                        collections = {this.props.collections}
                                        addVariantToCart={this.props.addVariantToCart} />
                                </Popup>: null
            }
            {
                this.state.customAlert ? <CustomAlert closePopup={this.openAlert}>
                                    <h4>Please pick a size</h4>
                                </CustomAlert>: null
            }

{
                this.state.donation ? <LearnPopUp closePopup={this.openDonation}>
                    <Donation id={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU5OTg0NjU5NDE2NTc="}
                        client={this.props.client}
                        product={donation}
                        closePopup={this.openDonation}
                        addVariantToCart={this.props.addVariantToCart} />
                </LearnPopUp> : null
            }
            
            <div className="contents">
                <div className="container">
                    
                    
                    <div className="countdown">
                            <h4>Only Available For:</h4>
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
                            {
                                variantImage==undefined? null:
                                variantImage.map((x,i)=> (
                                        <div data-id={shortid.generate()} style={{
                                            backgroundPosition: "85% 45%",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("${variantImage == undefined?"":  variantImage[i].src}")`
                                        }} className="product-img" alt="" />
                                    ))
                            }
                            
                        </div>
                        
                        
                        <h4>{Object(product).title=="Leopard"? "Laughing Leopard": Object(product).title=="Snake"? "Coiled Python": Object(product).title=="Crocodile"? "Hidden Crocodile": null}</h4>

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
                    
                    {/* <div className="defy-buttons">
                        <a href="" onClick={(e) =>{e.preventDefault(); this.openDonation(e)}} className="btn btn-transparent">Support Made In Africa</a>
                    </div> */}
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
                        
                        

                        <a  onClick={(e) =>{e.preventDefault(); this.addtoCart(e)}} className="btn btn-black">Add To My Shopping Bag</a>
                    </div> */}

<div className="collapsible">
                        <div className="top" onClick={(e)=> {this.showShoe(e)}}>
                            <p>Shoe description</p> <DownArrow />
                        </div>
                        <div className="bottom">
                        { 
                            
                                    Object(product).title=="Leopard"?
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
                                    Object(product).title=="Snake"?
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
                                    
                                    Object(product).title=="Crocodile"?
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
                                    
                                </p>
                                    : null       
                                }
                            
                        </div>
                    </div>
                    
                    <div className="accessories">
                        <p>Your bid includes:</p>
                        <div className="includes">
                            <div className="text">
                                <div className="svg">
                                    <WarrantyIcon />
                                    <a href="" onClick={(e)=>{e.preventDefault();this.showWarranty()}} className="see-more"><SeeMoreIcon /></a>
                                </div>
                                <small>One year limited warranty</small>
                            </div>
                            
                            {/* <div className="text">
                                <div className="img">
                                    <img onClick={(e)=>{e.preventDefault();this.openPopup("laces")}} src={laceImage==undefined? null: laceImage.src} alt=""/>
                                    <a href="" onClick={(e)=>{e.preventDefault();this.openPopup("laces")}} className="see-more"><SeeMoreIcon /></a> 
                                </div>
                                <small>Luxury leather laces</small>
                            </div> */}
                                
                            <div className="text gift">
                                <div className="img">
                                    <img onClick={(e)=>{e.preventDefault();this.openPopup("box")}} src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215678/uhara_box_sghkfs.png"} alt=""/>
                                    <a href="" onClick={(e)=>{e.preventDefault();this.openPopup("box")}} className="see-more"><SeeMoreIcon /></a> 
                                </div>
                                <small>Our signature gift box</small>
                            </div>
                            
                            <div className="text">
                                <div className="svg">
                                    <FreeShippingIcon />
                                    <a href="" onClick={(e)=>{e.preventDefault();this.showWarranty()}} className="see-more"><SeeMoreIcon /></a>
                                </div>
                                <small>Free shipping</small>
                            </div>        
                        </div>
                    </div>

                    
                    <div className="collapsible warranty">
                        <div className="top" onClick={(e)=> {this.showShipping(e)}}>
                            <p>Shipping, Returns And Warranty</p> <DownArrow />
                        </div>
                        <div className="bottom">
                            <h4><b>Shipping: </b></h4>
                            <p>Items will be shipped to you within 3-5 business days. Shipping is free for the Defy Odds Collection. </p>
                            <h4><b>Returns policy: </b></h4>
                            <p>
                            All return requests must be placed within 30 days from the day you have received the
order. <Link to="policy">(See full return policy here)</Link>

                            </p>
                            <h4><b>Warranty: </b></h4>
                            <p>The Defy Odds Collection includes a full one-year warranty. Production defects and any other
product imperfections with the exception of typical wear and tear or usage deterioration will involve a
full replacement of your shoes. <Link to="policy">(See full warranty policy here)</Link>
</p>
                        </div>
                    
                    </div>

                    {/* <div className="other-products">
                        <h2>See The Rest Of The Collection</h2>

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
                                     <div className="see-more">
                                        <a href="#" className="btn btn-green">SEE MORE</a>
                                    </div> 
                        </div>
                    </div> */}
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Content
