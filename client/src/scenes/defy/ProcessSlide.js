import React, { Component } from 'react'

export class ProcessSlide extends Component {
    render() {
        const style = {
            backgroundImage: `url("${require("./../../images/process_"+ this.props.id+".png")}")`
        }
        return (
            <div  className="process-slide" id={`${this.props.id}`}>
                <div style={style} className="background"></div>
            </div>
        )
    }
}

export default ProcessSlide
