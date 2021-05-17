import React, { Component } from 'react';
import Topper from './../_layout/Topper';
import Nav from './../_layout/Nav';
import Cookie from './../_layout/Cookie';
import Content from './Content';
import Footer from './../_layout/Footer';
import { Link } from 'react-router-dom';
import RightCaret from './../utilities/RightCaret';
import $ from 'jquery';
import Cart from './../_layout/Cart';
import Client from 'shopify-buy';
import './product.scss';
// import Client from 'shopify-buy';
const client = Client.buildClient({
    storefrontAccessToken: 'cb3936bfd99f302b3dbad360ee75af47',
    domain: 'this-is-afrikan.myshopify.com/'
  });
export class DefyProduct extends Component {
    constructor(props) {
        super(props);
        // console.log()

        this.state={
            products: this.props.products
        }
        
    }
    componentDidMount() {
        // console.log(this.props.products)
        window.scrollTo(0, 0)
        document.title = "Product";
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);
        
    }

    render() {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        // console.log(window.location.href)
        // 
        var c = url.searchParams.get("id");
        var product = {};
        if(this.props.products.length!=0){
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
           if(product!=undefined) document.title = product.title
        }///
        return (
            <div id="defyproduct"> 
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />

                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    {/* <li><Link to="/collections">
                        <a>Our Collections</a>
                    </Link></li>
                    <RightCaret /> */}
                    <li>
                        <a href="#">{product==undefined? null: product.title=="Leopard"? "Laughing Leopard":
                            product.title=="Snake"? "Coiled Python":
                             product.title=="Crocodile"? "Hidden Crocodile" : null }</a>
                    </li>
                </ul>
                {/* <Nav /> */}
                <Content products={this.props.products}
                    location={this.props.location}
                    client={this.props.client}
                    collections = {this.props.collections}
                    addVariantToCart={this.props.addVariantToCart} />
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default DefyProduct;
