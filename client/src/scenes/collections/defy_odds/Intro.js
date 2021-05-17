import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="top">
                    <h1>SO YOU WANNA DEFY ODDS</h1>
                    <p>
                        -Based on a codified body of ancient African wisdom we have designed a very limited collection of less than 20 shoes. This collection is inspired by a written form African knowledge that pre-dates Africa’s colonial era and is structured in symbols and pictographs very similar to hieroglyphics.
                        <br />
                        <br />
                        -The ancients believed in destiny. Moreover, they believed an individual’s understanding of his/her personality was the key to unlocking the secret power that would enable the realization of this destiny. By definition, defying odds was the essence of destiny manifestation.
                        <br />
                        <br />
                        -Therefore, we have designed a limited set of shoes we believe align with a select set of potential personality predispositions within this ancient African intellectual framework. Our interactive Oracle will interact with you to pose a number of questions designed to match you with a pair of shoes reflecting potent ancient symbols that best capture who you really are and reflect on your destiny.
                        </p>
                </div>

                <div className="bottom">
                    <div className="button">
                        <a href="#" className="btn btn-black">NEXT</a>
                    </div>

                    <small>not interested?</small>

                    <a className="text" href="#">See other collections</a>
                </div>
            </div>

        )
    }
}

export default Intro
