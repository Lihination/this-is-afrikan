import React, { Component } from 'react';
// import img from './../../images/footer-img.png';
// import logo_white from './../../images/logo_white.png';
export class Bottom extends Component {
    render() {
        return (
            <div className="page-bottom">
                <div className="container">
                    <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/logo_white_z9edon.png"} />
                    <p>&copy; All rights reserved 2021 This.is.afrikan</p>
                </div>
            </div>
        )
    }
}

export default Bottom
