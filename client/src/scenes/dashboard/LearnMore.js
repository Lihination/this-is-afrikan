import React, { Component, Fragment } from 'react';
import BackIcon from './../utilities/BackIcon';
// import monolith from './../../images/monolith.png';
import FunFacts from './FunFacts';
// import monolith_2 from './../../images/monolith_2.png';
import LearnPopUp from './../../utlilities/LearnPopUp';

export class LearnMore extends Component {
    constructor(props){
        super(props);
        this.state={
            popup: false
        }
    }
    openPopup = (x) => {
        // e.preventDefault()
        this.setState({
            popup: !this.state.popup,
        })
    }
    render() {
        return (
            <Fragment>
                {
                this.state.popup ? <LearnPopUp closePopup={this.openPopup}>
                                    <FunFacts closePopup={this.openPopup} pageChange={this.props.pageChange} />
                                </LearnPopUp>: null
            }
                <div className="learn-more">
                    <div className="background"></div>
                    <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215761/monolith_hz9abk.png"} alt=""/>
                    <div className="wrapper">
                        <a onClick={()=>this.props.pageChange("bid")} className="back">
                            <BackIcon />
                            <span>Go back</span>
                        </a>
                        <div className="inner">
                        <div className="left"><h4>The Oracle's African Worldview</h4>
                            <p>
                            We’ve designed <b><i>a one of a kind psychometric test that’s based on an ancient African view</i></b> of the world.
                            </p>
                            <p>
                            This is all the mystery and mystique of Old World Africa minus its mysticism and magic. While still in beta state, our first generation proprietary methodology is <b><i>the only experiment of its kind in the world to mine the ageless wisdom out of ancient belief paradigms</i></b> while staying true to their unique African form.
                            </p>
                            <p>
                            It’s based on an archaic dead form of writing in pictographs and ideographs. Similar to the hieroglyphics of Egyptian civilizations from over 5,000 years ago, these inscriptions were the exclusive form of written communication reserved for pre-colonial African nobility.
                            </p>
                            <p>
                            Amusingly, this very real but now defunct writing system was <i><b>the basis for the fictional written language of Wakanda</b></i> in the movie Black Panther. <a onClick={()=>{this.openPopup()}}>(See other fun facts)</a>
                            </p>

                            <p>
                            The wisdom of this ancient African worldview believed every individual had purpose and destiny. Moreover, the first step in realizing purpose was a thorough understanding of self. 
                            </p>
                            {/* <p>
                                <b><i>We want to customize this ancient wisdom just for you!</i></b>
                            </p> */}
                            <p>
                            We believe the archetypes we’ve mined from African antiquity serve as building blocks for self-understanding; the first step to self-actualization and the source of one’s power to defy odds.
                            </p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default LearnMore
