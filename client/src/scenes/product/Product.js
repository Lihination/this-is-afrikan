import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VariantSelector from './../_layout/VariantSelector';
import SeeMoreIcon from './../utilities/SeeMoreIcon';

export class Product extends Component {
    constructor(props) {
        super(props);

        let defaultOptionValues = {};
        // this.props.product.options.forEach((selector) => {
        //     defaultOptionValues[selector.name] = selector.values[0].value;
        // });
        this.state = {
            selectedOptions: defaultOptionValues,

        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.findImage = this.findImage.bind(this);
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

    render() {
        let variantImage = {}
        
        variantImage = this.state.selectedVariantImage || this.props.product.images[0]
        // let variant = this.state.selectedVariant || this.props.product.variants[0]
        // let variantQuantity = this.state.selectedVariantQuantity || 1
        // let variantQuantity = 0;
        // let variant = {}
        // console.log(this.props.product)
        // console.log("sssdd");
        // console.log(this.props.collection)
        // console.log(this.props.product.variants[0])
        return (
            <div className="aproduct">
                <Link to={{ pathname: "product", search: '?id='+this.props.product.id+ '&collection='+ this.props.collection, state: { id: this.props.product.id, collection: this.props.collection } }}>
                    <a>
                        <img src={`${this.props.product==undefined?null:  Object(variantImage).src}`} alt="" />
                    </a>
                </Link>

                <Link className="button" to={{ pathname: "product", search: '?id='+this.props.product.id+ '&collection='+ this.props.collection, state: { id: this.props.product.id, collection: this.props.collection } }}
                    // onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}
                    ><SeeMoreIcon/></Link>

                <h4>{this.props.product.title}</h4>
            </div>
        )
    }
}

export default Product
