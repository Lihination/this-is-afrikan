import React, { Component } from 'react';
import RightCaret from './../utilities/RightCaret';
import SliderWrapper from './SliderWrapper';
import { Link } from 'react-router-dom';

export class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="content">
                <div className="container">
                    
                    <ul className="indexes">
                        <li><Link to="/home">
                            Home
                        </Link></li>
                        <RightCaret />
                        <li><Link to="/collections">
                            Luxury Collections
                        </Link></li>
                    </ul>

                    <SliderWrapper products={this.props.products}
                        collection={this.props.collection}
                        client={this.props.client}
                        collections={this.props.collections}
                        addVariantToCart={this.props.addVariantToCart} />
                </div>
            </div>
        )
    }
}

export default Content
