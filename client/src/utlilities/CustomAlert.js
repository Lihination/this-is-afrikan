import React, { Component } from 'react'

export class CustomAlert extends Component {
    render() {
        return (
            <div className="custom-alert">
                <div className="back-overlay" onClick={this.props.closePopup}></div>
                <div className="inner">
                    {this.props.children}
                    <div className="bottom">
                    <a onClick={this.props.closePopup}>OK</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CustomAlert;
