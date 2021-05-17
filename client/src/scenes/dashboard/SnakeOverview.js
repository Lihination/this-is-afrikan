import React, { Component, Fragment } from 'react';

// import strength from './../../images/strength.png';
// import shoes from './../../images/shoes.png';

// import python from './../../images/python.png';
// import mask from './../../images/mask.png';
// import snake_icon from './../../images/snake_icon.png';
import Python_Pdf from './../../images/Python.pdf';
export class SnakeOverview extends Component {
    openPDF = () => {
        // window.open(Python_Pdf, "report");
        var prntWin = window.open();
        prntWin.document.write("<html><head><title>"+"Coiled Python"
        +'</title><link rel="icon" href="images/icon.png" type="image/icon type"></head><body>'
            + '<embed width="100%" height="100%" name="plugin" src="'+ Python_Pdf+ '" '
            + 'type="application/pdf" internalinstanceid="21"></body></html>');
        prntWin.document.close();
    }
    
    render() {
        return (
            <Fragment>
            <div className="background">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215767/python_r98wro.png"} alt=""/></div>
            <div className="snake overview" id="overview">
                <h3>You are a Coiled Python</h3>
                <div className="options">
                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/snake_icon_ntqbhr.png"} alt=""/></a>
                        <h4>The Pictograph</h4>
                        <p>
                            The pictograph of the
                            archetype is coiled as a
                            symbol of python’s crushing
                            power which is depicted in
                            its multiple loops.
                            The ideographic
                            representation of these
                            loops also echo the cyclical
                            nature of life 
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/mask_va61zi.png"} alt=""/></a>
                        <h4>Divination</h4>
                        <p>
                        You are the Coiled Python.
The Coiled Python is the
primary symbol for great
intuition, wisdom, and
preparation

                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    <div className="option">
                        <a onClick={()=>this.openPDF()}><img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215667/strength_qmjnla.png"} alt=""/></a>
                        <h4>Your Powers</h4>
                        <p>
                            <ul>
                                <li>Intuition</li>
                                <li>Preparation</li>
                                <li>Greed</li>
                                <li>Self absorbed</li>
                                <li>Risk adverse</li>
                            </ul>
                        </p>
                        {/* <a onClick={()=>this.openPDF()} className="btn btn-green">Full Report</a> */}
                    </div>

                    {/* <div className="option">
                        <a onClick={()=>this.props.pageChange("second", "strengths")}><img src={strength} alt=""/></a>
                        <h4>Top weaknesses</h4>
                        <p>
                            <ul>
                                <li>Greed</li>
                                <li>Self absorbed</li>
                                <li>Risk adverse</li>
                            </ul>
                        </p>
                        <a onClick={()=>this.props.pageChange("second", "strengths")} className="btn btn-green">Full Report</a>
                    </div> */}

                    <div className="option">
                        {/* <a onClick={()=>this.props.pageChange("second", 4)}><img className="shoe" src={shoes} alt=""/></a> */}
                        <a onClick={()=>this.openPDF()}><img className="shoe" src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215769/shoes_ojmsv4.png"} alt=""/></a>

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

export default SnakeOverview
