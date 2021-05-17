import React, { Component } from 'react';
import $ from 'jquery';

export class Donation extends Component {
    constructor(props){
        super(props);

        this.state={
            variantId: "",
            cart: false
        }
    }

    addtoCart = (e, id) => {
        if(this.state.cart){
            this.props.closePopup();
            this.props.addVariantToCart(this.state.variantId, 1);
        }
    }

    variantClick = (e, i) => {
        console.log($(e.target).prop("tagName"));
        $(".donation .btn").removeClass("btn-disabled")
        $(".amounts-list li").removeClass("active");
        if($(e.target).prop("tagName") =="A")
            $(e.target).parent().addClass("active");
        else if($(e.target).prop("tagName") =="LI")
            $(e.target).addClass("active");

        this.setState({
            variantId: i,
            cart: true
        })
    }

    render() {
        let variants = []
        // let variantQuantity = this.state.quantity || 1
        if(this.props.product!=undefined){
            variants = this.props.product.variants;

        }

        return (
            <div className="donation">
                <p>
                    We’re partnering with an indigenous African non-profit to offer a <b>FREE 10-week module program teaching the art of finely handcrafted shoes.</b> Located in one of the largest and oldest clusters of African shoe making artisans, this organization specializes in training the next generation of young African shoemakers in the age-old art of the highest levels of handcraftsmanship. 
                    <br/> <br/>
                    In an environment of astronomically high unemployment and even higher youth unemployment, the practical acquisition of concrete skills like shoe craftsmanship provides tangible alternatives to social ills like crime. Moreover, our model of positioning the handiwork of African artisans in global markets to consumers like you provides talented young people with access to tangible livelihoods and income streams.
                    <br/><br/>
                    With each pair of shoes you buy you can also choose to donate towards the <b>FREE</b> training of the younger generation of emerging artisans to deepen their shoe-making craft with a sense of professional excellence, dignity and pride. These funds will go toward offering <b>FREE training for up to 20 young people in one 10-week class.</b> We will provide you with information and reports of the graduating class of students you support. 
                </p>

                <div className="amounts">
                    <h4>Support An Artisan With:</h4>
                    <ul className="amounts-list">
                        {
                            variants.length !=0?
                                variants.map((x,i)=> {
                                    // console.log(x);
                                    return <li onClick={(e)=>{this.variantClick(e, x.id)}}><a>${x.title}</a></li>
                                }): null
                            
                        }
                    </ul>
                </div>

                <a className="btn btn-black btn-disabled" onClick={(e) =>{e.preventDefault(); this.addtoCart(e)}}>I Support</a>
            </div>
        )
    }
}

export default Donation
