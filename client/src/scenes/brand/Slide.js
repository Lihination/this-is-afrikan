import React, { Component } from 'react'

export class Slide extends Component {
    render() {
        const style = {
            backgroundImage: `url(${this.props.image})`
        }
        return (
            <div id={this.props.id} style={style} className="slide background">
            </div>
        )
    }
}

export default Slide
