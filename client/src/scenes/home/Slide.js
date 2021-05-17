import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Slide extends Component {
    render() {
        return (
            <div className={`slide`} id={`slide${this.props.id}`}>
                <div className="heading">
                    <h1>
                        {this.props.title1}
                    </h1>
                    <h1 className="bold">
                        {this.props.title2}
                    </h1>
                    {/* <h4>{this.props.subtitle}</h4> */}

                </div>
            </div>
        )
    }
}

export default Slide;
