import React, { Component } from 'react';
export class FunFacts extends Component {
    learnMore = ()=> {
        this.props.closePopup();
        this.props.pageChange("learn-more");
    }
    render() {
        return (
            <div className="fun-facts">
                <div className="background"></div>
                <div className="wrapper">
                    {/* <a onClick={()=>this.props.change("process")} className="back">
                        <BackIcon />
                        <span>Go back</span>
                    </a> */}
                    <h4>Fun Facts</h4>
                    <ol>
                    <li>
                        In the movie Black Panther, the fictional civilization of Wakanda had its own distinct written language
                        culture. The basis of the fictional language is the real African dead language of pictographs on your
                        shoes. 
                    </li>
                    <li>
                        There are scholars who have traced this dead language as stemming from ancient Egyptian hieroglyphics.
                    </li>
                    <li>
                    This written African language has been dated back to as early to 400 AD. 
                    </li>
                    <li>
                    This dead language was once taught to young African children in schools and used in pre-colonial
court cases.
                    </li>
                    <li>
                    The language was transmitted to Cuba and Haiti through the transatlantic slave trade where it still
thrives today in the form of anafourana and veve symbols. 
                    </li>
                    <li>
                    The designs on the fabric of your shoes are the pictographs and hieroglyphics of this ancient dead
language. This material on your shoes is one of only four fabrics that are indigenous to the country of
Nigeria. Most other African fabrics are produced elsewhere such as ankara in the Netherlands.
                    </li>
                    <li>
                    The ancient fraternal secret society that once exclusively used the fabric for your shoes and was the
custodian of all knowledge and understanding of the dead language still thrives today.
                    </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default FunFacts
