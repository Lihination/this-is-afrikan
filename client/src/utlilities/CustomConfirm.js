import React, { Component } from 'react'

export class CustomConfirm extends Component {
    render() {
        return (
            <div className="custom-confirm">
                <div className="back-overlay"></div>
                <div className="inner">
                    {this.props.children}
                    <div className="bottom">
                        <a onClick={this.props.accept}>OK</a>
                        <a onClick={this.props.closePopup}>Cancel</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CustomConfirm;
