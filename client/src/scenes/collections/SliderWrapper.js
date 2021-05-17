import React, { Component } from 'react';

import Slider from './Slider';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export class SliderWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.collection=="premium"? 1: this.props.collection=="Defy Odds"? 1: this.props.collection=="kalabar collection"? 2
                    : this.props.collection=="Rustic Collection"? 3 : this.props.collection=="upcoming collection"? 4 : 1,
            backButton: false,
        }
    }

    componentDidMount() {
        // $(document).keypress(function (event) {
        //     alert(alert(String.fromCharCode(event.which)))
        // })
    }

    doSlide = (x) => {
        this.setState({
            id: x,
        })
    }

    render() {
        return (
            <div className="slider-wrapper">
                <ul className="links">
                    <li><a id="link1" onClick={() => this.doSlide(1)} className="active">Defy Odds Collectible</a></li>
                    <li><a id="link2" onClick={() => this.doSlide(2)}>Premium Collection</a></li>
                    <li><a id="link3" onClick={() => this.doSlide(3)} >Urban Collection</a></li>
                    <li><a id="link4" onClick={() => this.doSlide(4)}>Upcoming Collection</a></li>
                    {/* <Link to="defy"><li><a id="link4" >Wanna Defy Odds?</a></li></Link> */}
                    <li><Link to="defy" >Defy Odds Adventure</Link></li>
                    {/* <li><Link to={{
                                    pathname: `brand`, state: {
                                        id: 1
                                    }
                                }} >About Our Brand</Link></li> */}
                    {/* <li><a id="link4" onClick={() => this.doSlide(4)}>Consult Collection</a></li> */}

                </ul>
                <Slider id={this.state.id}
                    client={this.props.client}
                    products={this.props.products}
                    collections={this.props.collections}
                    addVariantToCart={this.props.addVariantToCart} 
                    collection={this.props.collection}
                />
            </div>
        )
    }
}

export default SliderWrapper
