import React, { Component, Fragment } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import LearnPopUp from './../../utlilities/LearnPopUp';
import FunFacts from './FunFacts';
import LearnMore from './LearnMore';

export class Four extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            images: [
                "https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215709/brand_41_rfscug.jpg",
                // "brand_42"
            ]
        }
    }

    openPopup = (x) => {
        this.setState({
            popup: !this.state.popup,
        })
    }

    render() {
        return (
            <Fragment>
                

                <div id="4" className="four brands">
                {
                    this.state.popup? <LearnPopUp closePopup={this.openPopup}>
                        <LearnMore />
                    </LearnPopUp>: null
                }
                    <div className="overlay"></div>
                    <Slider name="four" images={this.state.images} />
                    <div className="left">
                    <div className="inner">
                        <h1>DISTINCTIVE</h1>
                        <h1 className="bold">AFRICAN DESIGNS</h1>
                        </div>
                    </div>
                    <div className="right">
                    <div className="inner">
                        <p>
                            Our shoes look and feel African.<br /><br />
                            Not Italian. Not even American. These are distinctive African designs.<br /><br />
                            Our shoes are steeped in ancient African ritual and tradition. Historically preserved for pre-colonial aristocrats, we’ve sourced sacred indigenous ethnic fabrics inscribed with ancient secret symbols that inspired the fictional written language of Wakanda in the movie Black Panther. These shoes not only look African; they reflect a distinctly African worldview and ethos. <a onClick={this.openPopup}>(Learn more)</a><br /><br />
                            What’s more, a lot of “African” materials are actually mass produced with technology in European locations like the Netherlands but most of our fabrics are still made the old fashioned way and are some of the few remaining materials that are only produced in Africa. <br /><br />
                            This.is. áfrìkán<br /><br />
                            Our shoes look African because they reflect all that is Africa. 
                            <Link to="/collections">Shop Now</Link>
                        </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Four
