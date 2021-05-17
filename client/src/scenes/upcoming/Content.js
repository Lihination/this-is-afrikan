import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
import product_gif from './../../images/product-gif.gif';
import gallery_1 from './../../images/gallery_1.png';
import gallery_2 from './../../images/gallery_2.png';
import gallery_3 from './../../images/gallery_3.png';
import gallery_4 from './../../images/gallery_4.png';

export class Content extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        this.state = {
            quantity: 1,
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
    }

    componentDidMount = () => {

    }

    findImage(images, variantId) {
        const primary = images[0];

        const image = images.filter(function (image) {
            return image.variant_ids.includes(variantId);
        })[0];

        return (image || primary).src;
    }

    handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;

        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

        this.setState({
            selectedVariant: selectedVariant,
            selectedVariantImage: selectedVariant.attrs.image
        });
    }

    handleQuantityChange(event) {
        this.setState({
            selectedVariantQuantity: event.target.value
        });
    }

    plus = () => {
        this.setState({
            quantity: this.state.quantity + 1,
        })
    }

    minus = () => {
        this.setState({
            quantity: this.state.quantity == 1 ? this.state.quantity : this.state.quantity - 1,
        })
    }

    render() {
        let variantImage = this.state.selectedVariantImage || Array(Object(this.state.product).images)[0]
        let variant = this.state.selectedVariant || Array(Object(this.state.product).variants)[0]
        let variantQuantity = this.state.selectedVariantQuantity || 1
        console.log(Object(this.state.product))
        console.log(Object(Object(Array(Object(this.state.product).variants)[0])[0]).price)
        return (
            <div className="content">
                <div className="container">
                    <div className="body">
                        <div className="inner">
                            <div className="product">
                                <div className="product-left">
                                    <div className="product-top">
                                        <img className="product-img" src={product_gif} alt="" />
                                        <div className="gallery">
                                            <img src={gallery_1} alt="" />
                                            <img src={gallery_2} alt="" />
                                            <img src={gallery_3} alt="" />
                                            <img src={gallery_4} alt="" />
                                        </div>
                                    </div>

                                    <div className="product-bottom">
                                        <h4>Sizes</h4>
                                        <ul className="sizes">
                                            <li><a href="#">40</a></li>
                                            <li><a href="#">41</a></li>
                                            <li><a href="#">42</a></li>
                                            <li className="active"><a href="#">43</a></li>
                                            <li><a href="#">44</a></li>
                                            <li><a href="#">45</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-right">
                                    <h2>{Object(this.state.product).title}</h2>
                                    <p>
                                        {Object(this.state.product).description}
                                    </p>
                                    <h3>${Object(Object(Array(Object(this.state.product).variants)[0])[0]).price}</h3>
                                    <div className="quantity">
                                        <a onClick={this.minus} className="minus">-</a>
                                        <h4>{this.state.quantity}</h4>
                                        <a onClick={this.plus} className="plus">+</a>
                                    </div>
                                    <a onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
                                        className="btn btn-black">ADD TO CART</a>
                                    <a href="#" className="btn btn-green">CHECKOUT NOW</a>
                                </div>
                            </div>

                            <div className="other-products">
                                <h4>Other products in this collection</h4>

                                <div className="products">
                                    {/* {
                                        this.props.products.map((product) => {
                                            return (
                                                <Product
                                                    addVariantToCart={this.props.addVariantToCart}
                                                    client={this.props.client}
                                                    key={Number(product.id).toString()}
                                                    product={product}
                                                />
                                            )
                                        })
                                    } */}
                                    {/* <div className="see-more">
                                        <a href="#" className="btn btn-green">SEE MORE</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content
