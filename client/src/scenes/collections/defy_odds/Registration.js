import React, { Component } from 'react'

export class Registration extends Component {
    render() {
        return (
            <div className="registration">
                <div className="top">
                    <h1>Sign Up</h1>

                    <div className="middle">
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" name="first-name" id="first-name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="text" name="email" id="email" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" name="last-name" id="last-name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input type="text" name="phone" id="email" />
                            </div>
                        </div>

                        <div className="row">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration
