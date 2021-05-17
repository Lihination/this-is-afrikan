import React, { Component } from 'react';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Body_Bid from './Body_Bid';

export class Bid extends Component {
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
            imageId: 0
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
        this.setState({
            days: 31 - now.getDay(),
            hours: 24 - now.getHours(),
            minutes: 60 - now.getMinutes()
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
                    return x.title == this.props.answer
                })[0]
            }
            variantImage = this.state.selectedVariantImage || Array(Object(product).images)[0]
        if(product!=undefined){
            variants = product.variants
        }
        console.log(variantImage)

        return (
            <div className="shoes-section">
                <div className="background"></div>
                <h1 className="answer-text">You are a {this.props.answer=="Leopard"?"Smiling Leopard": this.props.answer=="Snake"? "Coiled Python": "Crocodile"}</h1>
                <div className="wrapper">
                    <div className="shoes">
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
                        </div>
                    </div>
                    <div className="auction-section">
                        <div className="inner">
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tincidunt aliquam vitae nullam. Ac leo cursus a sit eget orci. Mauris cras vel tellus quis eleifend vitae ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tincidunt aliquam vitae nullam. Ac leo cursus a sit eget orci. Mauris cras vel tellus quis eleifend vitae ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tincidunt aliquam vitae nullam. Ac leo cursus a sit eget orci. Mauris cras vel tellus quis eleifend vitae ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Only available for the next
                                </p>
                            </div>

                            <ul className="countdown">
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
                            </ul>

                            <div className="auction">
                                <div className="auction-left">
                                    <h4>Your current bid</h4>
                                    <div className="price">
                                        <a onClick={()=>this.decrease()} className="minus">-</a>
                                        <span>{this.state.price}</span>
                                        <a onClick={()=>this.increase()} className="plus">+</a>
                                    </div>
                                </div>

                                <div className="auction-right">
                                    <h4>Custom amount</h4>
                                    <div className="price">
                                        <span>$</span>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>

                            <div className="button">
                                <a className="btn btn-black">Lock bid</a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Bid;

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
