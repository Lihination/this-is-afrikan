import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';

export class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215708/brand_1_z9vqwn.jpg"
            ]
        }
    }
    render() {
        return (
            <div id="1" className="one brands">
                {/* <div className="overlay"></div> */}

                <Slider name="one" images={this.state.images} />
                <div className="left">
                    <div className="inner">
                        <h1>MADE IN</h1>
                        <h1 className="bold">AFRICA</h1>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="inner">
                    <p>
                        Our shoes are made in Africa.<br /><br />
                        Not made in Italy. Not made in China. Made in Africa.<br /><br />
                        At significant cost and not without considerable security risk we have deliberately journeyed deep into the sometimes seeming impenetrable, inaccessible African heartland beyond the polished development of Africa’s major metropolises. And while they’re grittier they’re also home to massive pools of untapped creative and incredibly productive talent which we are spotlighting to the world.<br /><br />
                        Often stereotyped with poverty and disease such places are frequently positioned as hopeless and helpless. But out of these deep depths of Africa we are upsetting conventional narratives to bring you a level of handcrafted luxury previously reserved for the likes of New York, London and Milan.
                        <br /><br />
                        This.is. áfrìkán<br /><br />
                        We’re authentically handmade in Africa.  
                        <Link to="/collections">Shop Now</Link>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default One
