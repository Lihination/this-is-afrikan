import React, { Component } from 'react';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export class Auction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 600,
            max: 1500,
            days: 0,
            hours: 0,
            minutes: 0
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

    render() {
        return (
            <div className="auction">
                <div className="background"></div>
                <GreenAfricanMask />
                
                <div className="inner">
                    <div className="top">
                        <h4>Auction starts in</h4>
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
                        </ul>
                    </div>

                    <div className="bottom">
                        <small>You can place an opening bid</small>
                        <div className="slider">
                            <h3>${this.state.min}</h3>
                            <PrettoSlider min={this.state.min} max={this.state.max} step={50} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                            <h3>${this.state.max}</h3>
                        </div>
                        <div className="max"><a onClick={this.increase}>Increase max value</a></div>
                        <div className="button">
                            <a className="btn btn-black">ENTER BID</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auction;

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: "80%"
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
