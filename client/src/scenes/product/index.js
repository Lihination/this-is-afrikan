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
import Oracle from './../_layout/Oracle';
import './product.scss';
// import Client from 'shopify-buy';
const client = Client.buildClient({
    storefrontAccessToken: 'cb3936bfd99f302b3dbad360ee75af47',
    domain: 'this-is-afrikan.myshopify.com/'
  });
export class Product extends Component {
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
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        document.title = "Product";
        var c = url.searchParams.get("id");
        var product = {};//
        var d = url.searchParams.get("collection");
        if(this.props.products.length!=0){
            product = this.props.products.find((x, i) => {
                // console.log(x)
                return x.id == c
            });
           if(product!=undefined) document.title = product.title
        }///
        $("head").append(`<link rel="icon" href="images/icon.png" type="image/icon type">`);

        window.onpopstate = (data)=> {
            window.history.go(0);
            // this.props.history.history.goBack({
            //     state: { collection: d} 
            // });s
            console.log(data.srcElement.location.pathname);
          if(data.srcElement.location.pathname=="/collections") {
            // window.history.pushState(null, null, window.location.href);
            
            this.props.history.history.push({ pathname: "/collections",
                     state: { collection: d} })
          }
        }
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
        var d = url.searchParams.get("collection");
        return (
            <div id="product"> 
                {this.props.children}
                <Topper history={this.props.history} client={this.props.client}
                    openCart={this.props.openCart} checkout={this.props.checkout} />
                <Link className="oracle-ghost" to="defy">
                    <a href="defy">
                        <Oracle />
                    </a>
                </Link>
                <ul className="indexes">
                    <li><Link to="/home">
                        <a>Home</a>
                    </Link></li>
                    <RightCaret />
                    <li><Link to={{pathname: "/collections", state: { collection: d}}}>
                        <a>Luxury Collections</a>
                    </Link></li>
                    <RightCaret />
                    <li><a href="#">
                        {product==undefined? null: product.title}
                    </a></li>
                </ul>
                {/* <Nav /> */}
                <Content products={this.props.products}
                    location={this.props.location}
                    history={this.props.history}
                    removeWarranty={this.props.removeWarranty}
                    client={this.props.client}
                    changesWarranty={this.props.changesWarranty}
                    returnWarranty={this.props.returnWarranty}
                    lineItems = {this.props.lineItems}
                    collections = {this.props.collections}
                    addVariantToCart={this.props.addVariantToCart} />
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default Product;
