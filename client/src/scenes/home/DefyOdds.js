import React, { Component } from 'react';
import GreenAfricanMask from './../utilities/GreenAfricanMask';
import { Link } from 'react-router-dom';
// import defy_ankarra from './../../images/defy_ankarra.png';
// import mask_ankarra from './../../images/mask_ankarra.png';
// import { useRouter } from 'next/router'
// import GreenAfricanMask from './../utilities/GreenAfricanMask';
export class DefyOdds extends Component {
    render() {
        return (
            <div className="defy-odds">
                <div className="overlay">
                    <div className="container">
                        <div className="images">
                            {/* <img className="web" src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215722/defy_ankarra_bm7l7s.png"} alt=""/> */}
                            {/* <img className="mobile" src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215760/mask_ankarra_tlsizn.png"} alt=""/> */}
                        </div>
                        <div className="defy-left">
                            {/* <Link to="/defy">
                            <a className="mask" href="/defy"><GreenAfricanMask /></a>
                        </Link> */}
                            <h1>THE DEFY ODDS ADVENTURE</h1>
                            {/* <h4>The Defy Odds Adventure; they’re <b><i>really</i></b> more than just shoes</h4> */}
                            <h4>It’s really more than shoes</h4>
                            <div className="button">
                                <Link to="/defy">
                                    <a href="#" className="btn btn-white">Discover Something More</a>
                                </Link>
                            </div>
                        </div>
                        <div className="defy-right">
                            <Link to="/defy">
                                {/* <GreenAfricanMask /> */}
                                {/* <img src={devy_svg} alt=""/> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DefyOdds
