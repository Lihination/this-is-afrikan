import React, { Component, Fragment } from 'react'
import Slide from './Slide';
import $ from 'jquery'

export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }

    componentDidMount() {
        const t = this;
        // $(`.slider`).scrollLeft(1100 * (this.props.id - 1));
        setInterval(function () {
            t.setState({
                id: t.state.id == String(t.props.images).length ? 1 : t.state.id + 1
            }, function () {
                $(`${this.props.name} .slider`).animate({ scrollLeft: $(window).outerWidth() * (this.state.id - 1) }, 500);
            })

        }, 9000)

    }

    render() {
        return (
            <div className="slider">
                {
                    this.props.images.map((x, i) => (

                        <Slide id={i + 1} image={x} />

                    ))
                }
            </div>
        )
    }
}

export default Slider
