import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
// import product_gif from './../../images/product-gif.gif';
import gallery_1 from './../../images/gallery_1.png';
import gallery_2 from './../../images/gallery_2.png';
import gallery_3 from './../../images/gallery_3.png';
import gallery_4 from './../../images/gallery_4.png';

export class Collection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {

        return (
            <div className="body-slide slide" id={`slide${this.props.id}`}>
                <div className="body">
                    <div className="inner">
                        <div className="product">
                            <div className="product-left">
                                <div className="product-top">
                                    {/* <img className="product-img" src={product_gif} alt="" /> */}
                                    {/* <div className="gallery">
                                        <img src={gallery_1} alt="" />
                                        <img src={gallery_2} alt="" />
                                        <img src={gallery_3} alt="" />
                                        <img src={gallery_4} alt="" />
                                    </div> */}
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
                                <h2>Lorem ipsum dolor sit</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Volutpat tincidunt aliquam
                                    vitae nullam. Ac leo cursus a sit eget orci.
                                    Mauris cras vel tellus quis eleifend vitae ut.
                                    </p>
                                <h3>$400</h3>
                                <a href="#" className="btn btn-black">ADD TO CART</a>
                                <a href="#" className="btn btn-green">CHECKOUT NOW</a>
                            </div>
                        </div>

                        {/* <div className="other-products">
                            <h4>Other products in this collection</h4>

                            <div className="products">
                                 {
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
                                } 
                             <div className="see-more">
                                        <a href="#" className="btn btn-green">SEE MORE</a>
                                    </div> 
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection
