import React, { Component } from 'react'

export class Payment extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="payment">
                <div className="inner">
                    <p>
                        We’ve provided a quick run down of how our divination process works and what to expect. First you’ll need to sign-up, and then pay a one time consultation fee of $50. Then you get to meet the oracle and she will tell you based on her knowledge of ancient african traditions what animal your personality best fits.  You can then choose to bid on a physical pair of 1 of 6 shoes that bear the inscription of that animal.
    <br /><br />
                        After you complete this process you can always find the results of your divination here on your dasboard by loging in.
                    </p>
                    <a l className="btn btn-black">Sign me up</a>
                </div>
            </div>
        )
    }
}

export default Payment
