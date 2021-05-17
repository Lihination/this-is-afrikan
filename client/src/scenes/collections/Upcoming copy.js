import React, { Component } from 'react'
import monolith from './../../images/monolith_3.png';
import black_maze from './../../images/black_maze.png';
export class Upcoming extends Component {
    render() {
        return (
            <div className="upcoming" id={`slide${this.props.id}`}>
                <div className="back">
                    <div className="overlay">

                    </div>
                </div>
                <div className="slide-left">
                    <div className="wrapper">
                        <div className="top">

                            <h1>{this.props.title}</h1>
                            <p>
                                The rustic Collection; imperfect perfection, deliberately designed to remind you that this.is.africa, and she is beautiful in her flaws.
                            </p>
                        </div>
                        <div className="bottom">
                            {/* <h4>Get them for</h4>
                            <h2>$250</h2> */}
                            {/* <img src={monolith} alt=""/> */}
                        </div>
                    </div>
                </div>

                <div className="slide-right">
                    <div className="back">
                        <div className="overlay">

                        </div>
                    </div>  
                    <div className="top">
                        <img src={black_maze} alt=""/>
                    </div>
                    <div className="bottom" id="rustic-slide">
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Upcoming
