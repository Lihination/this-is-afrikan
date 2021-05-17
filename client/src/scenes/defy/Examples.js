import React, { Component } from 'react';
// import example from './../../images/example.png';
import BackIcon from './../utilities/BackIcon';

export class Examples extends Component {
    render() {
        return (
            <div className="examples">
                <div className="background"></div>
                <div className="wrapper">
                    <div className="left">
                        <a onClick={()=>this.props.change("process")} className="back">
                            <BackIcon />
                            <span>Go back</span>
                        </a>
                        <h4>Your Consultation Report</h4>
                        <p>
                        At the end of your consultation, the Oracle will identify your unique personality type and you’ll be directed to your own dashboard results summarizing your personality details and powers. 
                        </p>
                        <p>
                        The dashboard also links to a detailed 7-paged report explaining: 
                            <ul>
                                <li>The historical context and philosophical details of the African ethos of personal destiny. </li>
                                <li>The Oracle’s explanation of your personality type</li>
                                <li>Your powers and limitations</li>
                            </ul>
                        </p>
                        <p>
                        The report is based on an archaic dead language of pictographs and ideographs that enabled us to unearth a distinctly African ethos about the individual’s place in the world and source of personal destiny. 
                        </p>
                        <p>
                        Similar to the hieroglyphics of Egyptian civilizations from over 5,000 years ago, these pictographs were the form of written communication reserved for the elite secret societies that ruled African communities prior to Western colonization.
                        </p>
                        <p>
                        The purpose of understanding your personality within this context is to better comprehend when, how and to what extent you should employ your unique traits and powers in order to defy your odds and achieve your purpose.
                        </p>
                    </div>
                    <div className="right">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215721/example_yriue4.png"} alt=""/>
                    </div>
                </div>
                    
            </div>
        )
    }
}

export default Examples
