import React, { Component,Fragment } from 'react';
// import GlobeIcon from './../utilities/GlobeIcon';
// import BookIcon from './../utilities/BookIcon';
// import StrengthIcon from './../utilities/StrengthIcon';
// import strength from './../../images/strength.png';
// import shoes from './../../images/shoes.png';
// import book from './../../images/book.png';
// import globe from './../../images/globe.png';
// import mask from './../../images/mask.png';
// import Leopard from './../../images/Leopard_back.png';
// import leopard from './../../images/leopard_icon.png';
import Leopard_Pdf from './../../images/Leopard.pdf'
export class LeopardOverview extends Component {
    openPDF = () => {
        // window.open(Leopard_Pdf,  "report")
        var prntWin = window.open();
        prntWin.document.write("<html><head><title>"+"Laughing Leopard"
        +'</title><link rel="icon" href="images/icon.png" type="image/icon type"></head><body>'
            + '<embed width="100%" height="100%" name="plugin" src="'+ Leopard_Pdf+ '" '
            + 'type="application/pdf" internalinstanceid="21"></body></html>');
        prntWin.document.close();
    }
    render() {
        return (
            <Fragment>
                <div className="background">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215749/Leopard_back_yr2fev.png"} alt=""/></div>
            <div className="leopard overview" id="overview">
                <h3>You are a Laughing Leopard</h3>
                <div className="options">
                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215760/leopard_icon_ymdpuh.png"} alt=""/></a>
                        <h4>The Pictograph</h4>
                        <p>
                            The pictograph of a leopard
                            with a smiling human face
                            represents the idea of a
                            creature which traverses the
                            human and animal form.
                            It is the knowing smile of a
                            guardian of ancient secrets,
                            grave truths and esoteric
                            knowledge
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/mask_va61zi.png"} alt=""/></a>
                        <h4>Divination</h4>
                        <p>
                        You are the Laughing
                        Leopard.
                        The Laughing Leopard is
                        the chief symbol for great
                        strength, stealth, and vision
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/strength_qmjnla.png"} alt=""/></a>
                        <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Courage</li>
                                <li>Vision</li>
                                <li>Recklessness</li>
                                <li>Rigidity</li>
                                <li>Confrontational</li>
                            </ul>
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    {/* <div className="option">
                        <a onClick={()=>this.props.pageChange("second", 4)}><img src={strength} alt=""/></a>
                        <h4>Top weaknesses</h4>
                        <p>
                            <ul>
                                <li>Reckless</li>
                                <li>Rigid</li>
                                <li>Confrontational</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", 4)} className="btn btn-green">Full Report</a>
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

export default LeopardOverview
