import React, { Component } from 'react';
import GreenAfricanMask from './../utilities/GreenAfricanMask';

export class Overlay extends Component {
    render() {
        return (
            this.props.loading ?
                <div className="loading-overlay">
                    <h1><GreenAfricanMask /></h1>
                </div>
                : null
        )
    }
}

export default Overlay
