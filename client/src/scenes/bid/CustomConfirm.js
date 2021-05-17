import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";

export class CustomConfirm extends Component {
    render() {
        return (
            <div className="custom-confirm">
                <div className="back-overlay"></div>
                <div className="inner">
                    {this.props.children}
                    <div className="bottom">
                        {/* <a onClick={this.props.accept}>OK</a> */}
                        <StripeCheckout
                            stripeKey="pk_live_51Hrf8RAQYzYsOqBDWUt9iT0vKrcV5GLGQrauy9SzaVNz8nb4V4rGc8X3J0tHf8BKCTlVJg172UmTOoaTTud6UNOm00pTfeglNk"
                            token={this.props.handleToken}
                            amount={parseInt(this.props.bid * 100)}
                            name="Defy Odds Shoes"
                            closed={this.props.accept}
                            // shippingAddress={{
                            //     line1: this.props.shipping_address,
                            //     postal_code: this.props.postal_code
                            // }}
                            // email={this.props.email}
                        >
                            <a>Ok</a>
                        </StripeCheckout>
                        <a onClick={this.props.closePopup}>Cancel</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CustomConfirm;
