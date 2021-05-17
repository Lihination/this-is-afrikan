import React, { Component, Fragment } from 'react';
import Overlay from './../_layout/Overlay';
// import LeopardReport from './LeopardReport';
import LeopardOverview from './LeopardOverview';
import SnakeOverview from './SnakeOverview';
// import SnakeReport from './SnakeReport';
import CrocodileOverview from './CrocodileOverview';
// import CrocodileReport from './CrocodileReport';
import Trailer from './VideoTrailer';
// import trailer from './../../images/trailer.mp4';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import LearnMore from './LearnMore';
import firebase from './../../services/firebase';
import ShoesPage from './ShoesPage';
import NewDesign from './NewDesign';
import SquareIcon from './../../utlilities/SquareIcon';
import ExitButton from './../../utlilities/ExitButton.js';
const user_ref = firebase.firestore().collection("users");
export class Content extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
            days: 0,
            hours: 0,
            minutes: 0,
            page: "body",
            answer: "undecided",
            screen: "overview",
            section: 0
        }
    }

    change = (page) => {
        this.setState({
            page: page
        }, function () {
            if (page == "body") {
                $(".defy-nav li").removeClass("active");
                $("#body").addClass("active");
            }
            else if (page == "bid") {
                $(".defy-nav li").removeClass("active");
                $("#bid").addClass("active");
            }
        })
    }

    pageChange = (page, section) => {
        this.setState({
            screen: page,
            section: section
        }, function () {
            if (page == "overview") {
                $(".defy-nav li").removeClass("active");
                $("#body").addClass("active");
            }
            else if (page == "bid") {
                $(".defy-nav li").removeClass("active");
                $("#bid").addClass("active");
            }
        })
    }

    componentDidMount() {
        var now = new Date();
        const t = this;
        console.log(now.getDay());
        this.setState({
            days: 31 - now.getDay(),
            hours: 24 - now.getHours(),
            minutes: 60 - now.getMinutes()
        })
        firebase.auth().onAuthStateChanged((user) => {
            user_ref.where("user", "==", user.uid)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((doc)=>{
                        const {answer} = doc.data();
                        console.log(answer)
                        if(answer===undefined)
                            t.setState({
                                answer: "undecided"
                            })
                        else
                            t.setState({
                                answer: answer
                            })
                    })
                })
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

    openMenu = () => {
        $(".defy-left").animate({
            left: 0
        }, 500);
        $(".defy-right .transparent").fadeToggle()
    }

    closeMenu = () => {
        $(".defy-left").animate({
            left: -800
        }, 500);
        $(".defy-right .transparent").fadeToggle()
    }

    render() {
        var product= {};
        let variantImage = {};
        let variants = [];
        if(this.state.answer!="undecided")
            if(this.props.products.length!=0)
            {
                product = this.props.products.filter((x,i)=>{
                    if(this.state.answer == "Laughing Leopard")
                        return x.title == "Defy Leopard"
                    if(this.state.answer == "Coiled Python")
                        return x.title == "Defy Python"
                    if(this.state.answer == "Hidden Crocodile")
                        return x.title == "Defy Crocodile"
                })[0]
            }
            variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        
            const videoJsOptions = {
                autoplay: true,
                controls: true,
                sources: [{
                  src: "https://res.cloudinary.com/thisisafrikan-com/video/upload/v1615215774/trailer_cybjk8.mp4",
                  type: 'video/mp4'
                }]
              }
              console.log("test")
              console.log(product)
        return (
            <NewDesign />
            // <div className="content">
            //     <div className="defy-left">
            //         <a onClick={this.closeMenu} className="close-menu">
            //             <ExitButton />
            //         </a>
            //         {/* <div onClick={this.closeMenu} className="transparent"></div> */}
            //         <GreenAfricanMask />
            //         <ul className="defy-nav">
            //             <li id="body" onClick={() => this.pageChange("overview")} className="active"><a >Dashboard</a></li>
            //             <li id="bid" onClick={() => this.pageChange("bid")} ><a>{this.state.answer + " Shoes"}</a></li>
            //             <li>
            //                 <Link target="shoes" to={{ pathname: "defyproduct", search: '?id='+product.id, state: { id: product.id } }}>
            //                     Shoe Information
            //                 </Link>
            //             </li>
            //             <li id="body" onClick={() => this.pageChange("trailer")}><a >Watch Defy Odds Trailer - Long Version</a></li>
            //             {/* <li ><a href="https://youtu.be/XqOswz1bzL4" target="video">Watch Defy Odds Trailer - Long Version</a></li> */}
                        
            //         </ul>
            //     </div>
            //     <div className="defy-right">
            //         {/* <div className="background">
            //             <img src={leopard} alt=""/></div> */}
            //         <div onClick={this.closeMenu} className="transparent"></div>
            //         <a onClick={this.openMenu} className="mobile-menu">
            //             <SquareIcon />
            //         </a>
            //         {
            //             this.state.answer=="undecided"?
            //             <Overlay loading={true} />
            //             :
                        
            //                 this.state.screen=="overview"?
                                
            //                         this.state.answer=="Laughing Leopard"?
            //                             <LeopardOverview answer={this.state.answer} products={this.props.products} change={this.change} pageChange={this.pageChange} />
            //                             : this.state.answer=="Coiled Python"?
            //                                 <SnakeOverview section={this.state.section} answer={this.state.answer} products={this.props.products} change={this.change} pageChange={this.pageChange} />
            //                                 : 
            //                                 <CrocodileOverview section={this.state.section} answer={this.state.answer} products={this.props.products} change={this.change} pageChange={this.pageChange} />
                                

            //                     : this.state.screen=="bid"?
            //                         <ShoesPage addVariantToCart={this.props.addVariantToCart} section={this.state.section} answer={this.state.answer} products={this.props.products} change={this.change} pageChange={this.pageChange} />
            //                     : this.state.screen=="learn-more"?
            //                         <LearnMore pageChange={this.pageChange} />
            //                     : this.state.screen=="trailer"?
            //                         <Trailer { ...videoJsOptions } pageChange={this.pageChange} />
            //                     : null
                               
            //                 // :
            //                 // <Bid change={this.change} />
            //         }
            //     </div>
            // </div>
        )
    }
}

export default Content
