import React, { Component,Fragment } from 'react';
// import strength from './../../images/strength.png';
// import shoes from './../../images/shoes.png';
// import crocodile from './../../images/crocodile.png';
// import crocodile_icon from './../../images/crocodile_icon.png';
import Crocodile_Pdf from './../../images/Crocodile.pdf';
// import mask from './../../images/mask.png';
export class CrocodileOverview extends Component {
    openPDF = () => {
        // window.open(Crocodile_Pdf, "report");
        var prntWin = window.open();
        prntWin.document.write("<html><head><title>"+"Hidden Crocodile"
        +'</title><link rel="icon" href="images/icon.png" type="image/icon type"></head><body>'
            + '<embed width="100%" height="100%" name="plugin" src="'+ Crocodile_Pdf+ '" '
            + 'type="application/pdf" internalinstanceid="21"></body></html>');
        prntWin.document.close();
    }
    render() {
        return (
            <Fragment>
                <div className="background">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215715/crocodile_m7aicb.png"} alt=""/></div>
            <div className="crocodile overview" id="overview">
                <h3>You are a Hidden Crocodile</h3>
                <div className="options">
                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215717/crocodile_icon_dtr3d0.png"} alt=""/></a>
                        <h4>The Pictograph</h4>
                        <p>
                        The pictograph of the
Hidden Crocodile is rife with
a variety of claw symbols
echoing the centrality of
might and power to this
archetype
The amphibious beast’s face
is hidden or submerged to
underline its adaptability to
multiple environments

                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/mask_va61zi.png"} alt=""/></a>
                        <h4>Divination</h4>
                        <p>
                        You are the Hidden
Crocodile.
The Hidden Crocodile is the
primary symbol for raw
power, might and majesty. 
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/strength_qmjnla.png"} alt=""/></a>
                        <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Might</li>
                                <li>Honesty</li>
                                <li>Idealism</li>
                                <li>Fortune</li>
                                <li>Hot-headedness</li>
                            </ul>
                        </p>
                        
                    </div>

                    {/* <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "strengths")}><img src={strength} alt=""/></a>
                        <h4>Top weaknesses</h4>
                        <p>
                            <ul>
                                <li>Reckless</li>
                                <li>Rigid</li>
                                <li>Confrontational</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "strengths")} className="btn btn-green">Full Report</a>
                    </div> */}

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215769/shoes_ojmsv4.png"} className="shoe" alt=""/></a>
                        <h4>Defy Odds Shoes</h4>
                        <p>
                            We’ve designed a pair of
                            shoes to provide a physical
                            reminder of your distinct
                            personality traits within an
                            ancient African historical
                            context to support your defy
                            odds journey    
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>
                </div>
                <div className="buttons">
                <a onClick={()=>this.openPDF()} className="btn btn-black">Full Report</a>
                </div>
                
            </div>
            </Fragment>
        )
    }
}

export default CrocodileOverview
