import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from './CardSection'
import React from 'react';
import axios from 'axios';

class CheckoutForm extends React.Component {
    handleSubmit = async event => {
        event.preventDefault();

        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        const url = "https://localhost:5000/secret";
        // const proxyurl = "https://headerng.herokuapp.com/";
        // fetch(proxyurl + url)
        //     .then(response => response.json())
        //     .then((data) => {
        //         console.log(data)
        //     })
        const t = this;

        axios.get('http://localhost:5000/secret', //proxy uri
            {
                headers: {
                    // authorization: ' xxxxxxxxxx' ,
                    'Content-Type': 'application/json'
                }
            }).then(async function (response) {
                var clientSecret = response.data.client_secret;
                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            name: t.props.name,
                        },
                    }
                });

                if (result.error) {
                    // Show error to your customer (e.g., insufficient funds)
                    console.log(result.error.message);
                } else {
                    // The payment has been processed!
                    if (result.paymentIntent.status === 'succeeded') {
                        console.log(result);
                        // Show a success message to your customer
                        // There's a risk of the customer closing the window before callback
                        // execution. Set up a webhook or plugin to listen for the
                        // payment_intent.succeeded event that handles any business critical
                        // post-payment actions.
                    }
                }
            });

        // if (result.error) {
        //     console.log(result.error.message);
        // } else {
        //     console.log(result.token);
        // }
    };

    render() {
        return (
            <div>
                <div className="product-info">
                    {/* <h3 className="product-title">Apple MacBook Pro</h3>
                    <h4 className="product-price">$999</h4> */}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button disabled={!this.props.stripe} className="btn-pay">
                        Pay for consultation
                    </button>
                </form>
            </div>
        );
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}