import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';

export class Five extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215711/brand_52_he5din.jpg",
                // "brand_52"
            ]
        }
    }
    render() {
        return (
            <div id="5" className="five brands">
                <div className="overlay"></div>
                <Slider name="five" images={this.state.images} />
                <div className="left">
                <div className="inner">
                    <h1>AFRICAN</h1>
                    <h1 className="bold">LUXURY</h1>
                    </div>
                </div>
                <div className="right">
                <div className="inner">
                    <p>
                    Our shoes are luxury from ancient Africa.<br /><br />
                    Not Parisian. Not even from the London fashion houses. This is luxury a la Africa.<br /><br />
                    That’s because we’re out to turn the luxury segment upside down and showcase a level of luxury that is distinctly African. Our shoes are made with some of the only remaining lavish fabrics solely produced in Africa.<br /><br />
                    Historically these high quality materials were reserved exclusively for the flowing robes of pre-colonial Africa’s pedigreed nobility and powerful aristocrats. Not only luxuriously rich in material fabric, our designs are richer still in antiquity, culture and tradition because they are inscribed with ancient meaning, secret symbols and lost knowledge that can be traced to the hieroglyphics of Egyptian civilizations from over 5,000 years ago.<br /><br/>
                    This.is. áfrìkán<br /><br />
                    This is African luxury.
                        <Link to="/collections">Shop Now</Link>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Five
