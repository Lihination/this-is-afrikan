import React, { Component, Fragment } from 'react'
import Slider from './Slider';
import { Link } from 'react-router-dom';
import DonationPopUp from './../../utlilities/DonationPopUp';
import Donation from './Donation';
export class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215709/brand_21_wjqrnp.jpg",
                // "brand_22",
            ],
            donation: false
        }
    }

    openDonation = (x) => {
        this.setState({
            donation: !this.state.donation,
        })
    }

    render() {
        var donation = {};
        if(this.props.products.length!=0){
            donation = this.props.products.find((x, i) => {
                // console.log(x.title)
                return x.title == "Donations"
            });
            // console.log(donation)
        }
        return (
            <Fragment>
                {
                this.state.donation ? <DonationPopUp closePopup={this.openDonation}>
                    <Donation id={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU5OTg0NjU5NDE2NTc="}
                        client={this.props.client}
                        product={donation}
                        history={this.props.history}
                        closePopup={this.openDonation}
                        addVariantToCart={this.props.addVariantToCart} />
                    </DonationPopUp> : null
                }

                <div id="2" className="two brands">
                    <div className="overlay"></div>
                    <Slider name="two" images={this.state.images} />
                    <div className="left">
                    <div className="inner">
                        <h1>AFRICAN</h1>
                        <h1 className="bold">SOCIAL IMPACT</h1>
                        </div>
                    </div>
                    <div className="right">
                    <div className="inner">
                        <p>
                            Our shoes have social impact.<br /><br />
                            Not driven by greed. Not even driven solely by profits. Driven by socio-economic impact.<br /><br />
                            That’s because our shoes sustain hard-working smallholders and grow African livelihoods. We located one of the largest and oldest clusters of African shoe makers and we’re sourcing our shoe supply directly from the most talented, creative and industrious local shoe making artisans.<br /><br />
                            So you bet this means you’re growing African livelihoods too. That’s because by positioning the handiwork of local African artisans in global markets to consumers like you, we’re supporting your ability to get a great and unique pair of African hand made shoes while providing smallholder communities with access to income streams they previously believed were unimaginable. What’s more, with each pair of shoes you buy you can also<a onClick={this.openDonation}>Support Made in Africa</a> by training the younger generation of emerging artisans to deepen their shoe-making craft with a sense of professional excellence, dignity and pride. <br /><br />
                            
                            This.is. áfrìkán<br /><br />
                            And our shoes have social impact in hardworking African communities. 
                            <Link to="/collections">Shop Now</Link>
                        </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Two;
