import React, { Component } from 'react';
import Link from 'next/link';
export class Product extends Component {
    render() {
        return (
            <div className="product">
                <img src="/images/product-image.png" alt="" />
                <Link href="/product">
                    <a href="#" className="btn btn-black">ADD TO CART</a>
                </Link>
            </div>
        )
    }
}

export default Product
