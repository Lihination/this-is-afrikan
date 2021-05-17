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
            price: 600
        }
    }
    increase = () => {
        this.setState({
            min: this.state.max,
            max: this.state.max + 1500
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

    handleChange = event => {
        console.log(event)
        this.setState({ price: event.target.innerText });
      }

    render() {
        return (
            <div className="bid">
                <div className="background"></div>
                <GreenAfricanMask />
                <Body_Bid answer={"Leopard"} products={this.props.products} change={this.change} />
                <div className="auction">
                    <div className="top">
                        <h4>Bids start at $600</h4>
                        <div className="price">${this.state.price}</div>
                    </div>
                    <div className="prices">
                        <div className="slider">
                            <h3>${this.state.min}</h3>
                            <PrettoSlider onChangeCommitted={this.handleChange} min={this.state.min} max={this.state.max} step={50} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                            <h3>${this.state.max}</h3>
                        </div>
                        {/* <div className="max"><a onClick={this.increase}>Increase max value</a></div> */}
                        
                    </div>
                    <div className="bottom">
                        <a className="btn btn-black">Lock bid</a>
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
