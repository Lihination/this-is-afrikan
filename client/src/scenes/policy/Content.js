import React, { Component } from 'react';
import RightCaret from './../utilities/RightCaret';
import { Link } from 'react-router-dom';

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <ul className="indexes">
                        <li><Link to="/home">
                            <a>Home</a>
                        </Link></li>
                        <RightCaret />
                        <li><Link to="/policy">
                            <a>Shipping, return and warranty policy</a>
                        </Link></li>
                    </ul>
                    <h1>Shipping, return and warranty policy</h1>
                    <p>The Return request must be placed within 30 days from the day you have received the order</p>
                    <p>Products must be in original and unused condition. All returns must include the original shoebox in good condition.</p>
                    <p>Once we receive the returned shoes, they will be inspected and if our return policy has been respected we will provide with the refund or the exchange depending on customer's request.</p>
                    <p>We will issue the refund to the original payment method, usually within 1 working day. Refunds will appear in the bank account of the customer within 10 working days depending on your bank/card issuer. Unfortunately, we cannot refund duties, taxes or shipping charges. Unless otherwise indicated, all exchanges will ship to the original shipping address. Customer will be notified by email when the new item has been shipped.</p>
                    <p>Returns of damaged/incorrect articles may result in a fee or refusal of the exchange/refund.</p>
                    <p>For customers resident in the United States and Canada, the return is free of charge and so is the shipping of new items in case of an exchange. Once received the return request, the customer will receive an email notification about the status of the request. In case of an exchange, they will be contacted to organize the pick-up of the returning article(s) and the shipping of the new one(s).</p>
                    <p>Customers residing outside of the United States and Canada are responsible for the shipment and the shipping fees of the return unless the article is incorrect, faulty or damaged upon arrival. Once we have received and the returned item(s) in original condition, we will process your refund.
                    </p>
                    <p>We try to ensure that your goods arrive free from defects. However, should you receive items that are faulty or incorrect, please contact our customer service team xxxx as soon as possible and no later than 14 days after delivery. We will arrange for a free courier return service in such cases. When a complaint is made an investigation of the product is carried out, in some cases we will send your complaint for further investigation to the supplier. Your feedback is extremely important to us, therefore we ask you to contact us and give us your opinion or express your concerns.</p>
                </div>
            </div>
        )
    }
}

export default Content
