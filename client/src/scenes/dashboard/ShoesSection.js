import React, { Component, Fragment } from 'react';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import firebase from './../../services/firebase';
const user_ref = firebase.firestore().collection("users");
export class ShoesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 600,
            max: 1500,
            days: 0,
            hours: 0,
            minutes: 0,
            price: 600,
            variantId: "",
            imageId: 0,
            bid: 0,
            haveBid: false
        }
    }

    decrease = () => {
        this.setState({
            price: this.state.price - 50
        })
    }

    increase = () => {
        this.setState({
            price: this.state.price + 50
        })
    }
    componentDidMount() {
        var now = new Date();
        console.log(now.getDay());
        const t = this;
        this.setState({
            days: 31 - now.getDay(),
            hours: 24 - now.getHours(),
            minutes: 60 - now.getMinutes()
        })

        firebase.auth().onAuthStateChanged((user) => {
            user_ref.where("user", "==", user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=>{
                        const { bid, haveBid} = doc.data();
                        t.setState({
                            bid: bid,
                            haveBid: haveBid
                        })
                    })
                })
            
            
        })

        // user_ref.where("user", "==", firebase.auth().currentUser.uid)
        //     .get().then(query=> {
        //         query.forEach(doc=> {
        //             const { bid, haveBid} = doc.data();
        //             t.setState({
        //                 bid: bid,
        //                 haveBid: haveBid
        //             })
        //         })
        //     })
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

    handleChange = event => {
        console.log(event)
        this.setState({ price: event.target.innerText });
      }

      addtoCart = () => {
        if(this.state.variantId==""){
            alert("Please pick a size")
        }else
            this.props.addVariantToCart(this.state.variantId, this.state.quantity)
    }

    render() {
        var product= {};
        let variantImage = {};
        let variants = [];
        if(this.props.answer!="undefined")
            if(this.props.products.length!=0)
            {
                product = this.props.products.filter((x,i)=>{
                    if(this.props.answer == "Laughing Leopard")
                        return x.title == "Defy Leopard"
                    if(this.props.answer == "Coiled Python")
                        return x.title == "Defy Python"
                    if(this.props.answer == "Hidden Crocodile")
                        return x.title == "Defy Crocodile"
                })[0]

                variantImage = this.state.selectedVariantImage || product.images.slice(0, 4)
            }
            
        if(product!=undefined){
            variants = product.variants
        }
        console.log(variantImage)

        return (
            <div className="shoes-section">
                {/* <div className="background"></div> */}
                
                <div className="wrapper">
                    <div className="left">
                        <div className="inner">
                            <img src={variantImage == undefined?"": variantImage[this.state.imageId].src} alt="" className="shoes-img"/>
                        
                            <div className="gallery">
                                {
                                    variantImage==undefined? null:
                                    variantImage.map((x,i)=> (
                                        <img onMouseEnter={()=>this.onMouseEnter(i)} 
                                            onMouseLeave={()=>this.onMouseLeave(i)}  src={x.src} alt="" />
                                        ))
                                }
                                
                            </div>

                            <h4>One pair made only!</h4>
                        </div>
                        
                    </div>
                    <div className="right">
                        <div className="inner">
                            <h1 className="answer-text">You are a {this.props.answer}</h1>
                            {
                                this.props.answer=="Hidden Crocodile"? 
                                    <Fragment>
                                        <p>
                                        And we’ve designed <b><i>only one distinct pair of shoes for your personality </i></b>type capturing the ideograph of a Hidden Crocodile on ancient fabric previously reserved for pre-colonial African nobility.<a onClick={()=>{ this.props.pageChange("learn-more")}}>(Learn more)</a>
                                            <br />
                                        </p>
                                        <p>
                                        They’ve been designed as a powerful physical reminder of your distinct personality traits and their limitations as you walk through your daily defy odds journey to realize your particular destiny.
                                        </p>
                                        
                                        <p style={{
                                        fontWeight: "bold",
                                        display: "block"
                                    }}>
                                        <b><i>These are distinct shoes for distinct personalities.</i></b> And that’s why they’re more than just a pair of shoes…
                                    </p>
                                    </Fragment>
                                : this.props.answer=="Laughing Leopard"? 
                                <Fragment>
                                    <p>
                                    And we’ve designed <b><i>only one distinct pair of shoes for your personality </i></b>type capturing the ideograph of a Laughing Leopard on ancient fabric previously reserved for pre-colonial African nobility.<a onClick={()=>{ this.props.pageChange("learn-more")}}>(Learn more)</a>
                                        <br />
                                    </p>
                                        
                                    <p>
                                    They’ve been designed as a powerful physical reminder of your distinct personality traits and their limitations as you walk through your daily defy odds journey to realize your particular destiny.
                                    </p>

                                    <p style={{
                                        fontWeight: "bold",
                                        display: "block"
                                    }}>
                                        <b><i>These are distinct shoes for distinct personalities.</i></b> And that’s why they’re more than just a pair of shoes…
                                    </p>
                                </Fragment> : 
                                this.props.answer=="Coiled Python"? 
                                <Fragment>
                                    <p>
                                    And we’ve designed <b><i>only one distinct pair of shoes for your personality </i></b>type capturing the ideograph of a Coiled Python on ancient fabric previously reserved for pre-colonial African nobility. <a onClick={()=>{ this.props.pageChange("learn-more")}}>(Learn more)</a>
                                        <br />
                                    </p>
                                        
                                    <p>
                                    They’ve been designed as a powerful physical reminder of your distinct personality traits and their limitations as you walk through your daily defy odds journey to realize your particular destiny.
                                    </p>
                                    
                                    <p style={{
                                        fontWeight: "bold",
                                        display: "block"
                                    }}>
                                        <b><i>These are distinct shoes for distinct personalities.</i></b> And that’s why they’re more than just a pair of shoes…
                                    </p>
                                </Fragment> : null
                            }
                            
                        </div>
                    </div>
                </div> 

                <div className="bottom">
                    <div className="wrapper">
                        {/* <h1>Bid Process</h1> */}
                        
                        <p>
                        There’s no obligation but if you’d like to acquire this sole pair of {this.props.answer} shoes for your size you can place a bid on them through our online auction process, where you simply identify an amount you’re willing to pay before the bid deadline.
                        </p>
                        <p>
                            <b><i>Only one pair of shoes has been designed </i></b>for your size so only a competitive bid would secure them for you. These shoes, like your personality, are completely unique. 

                        </p>

                        <div className="buttons">
                            <a href="#" onClick={()=>{ this.props.pageChange("overview")}} className="btn btn-black">Go Back To The dashboard</a>
                            {
                                this.state.haveBid? <h1 className="bid-value btn">You have placed a bid for ${this.state.bid}</h1>: 
                                    <a href="#" onClick={(e)=> { e.preventDefault(); this.props.changeSection(1) }} className="btn btn-black">Place Your Bid</a>
                            }
                            
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ShoesSection;

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: "50%"
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#fff',
        },
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
