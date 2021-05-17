import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';

export class Three extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215707/brand_3_c7ds7z.jpg",
            ]
        }
    }

    render() {
        return (
            <div id="3" className="three brands">
                <div className="overlay"></div>
                <Slider name="three" images={this.state.images} />
                <div className="left">
                <div className="inner">
                    <h1>AFRICAN HANDMADE</h1>
                    <h1 className="bold">CRAFTMANSHIP</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="inner">
                        <p>
                            Our shoes are handcrafted.<br /><br />
                            Not machine manufactured. Not factory-line assembly. Made by hand.<br /><br />
                            And that’s because we’re driven by quality over quantity. We want to develop the best shoes possible with time and care and the highest quality of African shoe-making craftsmanship.<br /><br />
                            Superior levels of handcraftsmanship is one of the greatest assets African shoe-making artisans have. So we’ve shunned the conventional wisdom that to survive global competition these communities need to shift to big tech solutions out of their economic range. Instead we believe quality, durability and comfort are unparalleled in handcrafted shoes. And this is our commitment to you: superior quality shoes handcrafted with care, professional excellence and the highest attention to detail. A commitment we backup with a tangible one-year warranty.<Link to="policy">(See More)</Link> <br /><br />
                            This.is. áfrìkán<br /><br />
                            Handmade in Africa.
                            <Link to="/collections">Shop Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Three
