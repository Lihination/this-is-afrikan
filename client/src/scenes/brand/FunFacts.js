import React, { Component } from 'react';
import BackIcon from './../utilities/BackIcon';
export class FunFacts extends Component {
    learnMore = ()=> {
        this.props.closePopup();
        // this.props.change("learn-more");
    }
    render() {
        return (
            <div className="fun-facts">
                <div className="wrapper">
                    {/* <a onClick={()=>this.props.change("process")} className="back">
                        <BackIcon />
                        <span>Go back</span>
                    </a> */}
                    <h4>Five Fabric Facts</h4>
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
            </div>
        )
    }
}

export default FunFacts
