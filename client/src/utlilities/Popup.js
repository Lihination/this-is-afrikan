import React, { Component } from 'react'
import ExitButton from './ExitButton';
export class Popup extends Component {
    render() {
        return (
            <div className="pop-up">
                <div className="back-overlay" onClick={this.props.closePopup}></div>
                <div className="inner">
                    {this.props.children}
                </div>
                <a className="close" onClick={this.props.closePopup}><ExitButton /></a>
            </div>
        )
    }
}

export default Popup
