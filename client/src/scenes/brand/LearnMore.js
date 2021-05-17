import React, { Component, Fragment } from 'react';
import FunFacts from './FunFacts';
import BackIcon from './../utilities/BackIcon';
// import monolith from './../../images/monolith.png';
// import monolith_2 from './../../images/monolith_2.png';
export class LearnMore extends Component {
    constructor(props){
        super(props);
        this.state={
            learn: true,
        }
    }

    openFunFacts = () => {
        this.setState({
            learn: !this.state.learn
        })
    }

    render() {
        return (
            <Fragment>
                {/* {
                    this.state.learn ? 
                    <div className="learn-more">
                        <div className="wrapper">
                    
                            <div className="left">
                                <h4>The Oracle's African Worldview</h4>
                                <p>
                                Based on an archaic dead language of pictographs and ideographs, we have unearthed a distinctly African ethos about the individual’s place in the world and source of personal destiny. 
                                </p>
                                <p>
                                Similar to the hieroglyphics of Egyptian civilizations from over 5,000 years ago, these pictographs were the form of written communication reserved for the elite secret societies that ruled African communities prior to Western colonization. 
                                </p>
                                <p>
                                    Still serving as powerful inspirations in modern times, this very real but now defunct language was the basis for the fictional written language of Wakanda in the movie Black Panther. <a onClick={()=>{this.openFunFacts()}}>(See other fun facts)</a>
                                </p>

                                <p>
                                    The wisdom of this ancient African worldview believed that every individual had purpose and destiny. Moreover, the first step in realizing this purpose was a thorough understanding of self. These archetypes from African antiquity served as the building blocks for that self-understanding.
                                </p>
                                <p>
                                    <b><i>We want to customize this ancient wisdom just for you!</i></b>
                                </p>
                                <p>
                                    And that’s why we designed a unique psychometric test aligned to the archetypes within this African framework based on our proprietary methodology. However, no individual can be understood as complete a replica of any archetype. Rather these archetypes should be recognized as the starting point for self-awareness, which is a first step to self-actualization and the source of one’s power to defy odds.
                                </p>
                            </div> 
                        
                        </div>
                    </div>
                    : */}
                    <div className="fun-facts">
                    
                        <div className="wrapper">
                            {/* <a onClick={()=>this.openFunFacts()} className="back">
                                <BackIcon />
                                <span>Go back</span>
                            </a> */}
                            <div className="inners">
                                <h4>Fun Facts</h4>
                                <ol>
                                    <li>
                                    The designs on the fabric of our Premium Collection shoes are pictographs and hieroglyphics of an ancient dead written African language. 

                                    </li>
                                    <li>
                                    This written African language has been dated back to as early to 400 AD and there are scholars who have traced this dead language as stemming from ancient Egyptian hieroglyphics.
                                    </li>
                                    <li>
                                    The fabric is one of only four fabrics that are indigenous to the country of Nigeria. Most other African fabrics are produced elsewhere such as Ankara in the Netherlands.

                                    </li>
                                    <li>
                                    In the movie Black Panther, the fictional civilization of Wakanda had its own distinct written language culture. The basis of the fictional language is the real African dead language of pictographs on your shoes.

                                    </li>
                                    <li>
                                    The ancient fraternal secret society that once exclusively used the fabric on these shoes and was the custodian of all knowledge and understanding of the dead language still thrives today.

                                    </li>
                                    
                                </ol>
                            </div>
                            <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215761/monolith_hz9abk.png"} alt=""/>
                        </div>
                        
                    </div>
                {/* } */}
                
            </Fragment>
        )
    }
}

export default LearnMore
