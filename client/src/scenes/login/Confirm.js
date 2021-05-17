import React, { Component } from 'react';
import firebase from './../../services/firebase';

export class Confirm extends Component {
    constructor(props){
        super(props);

        this.state={
            password: ""
        }
    }

    changePassword = () => {
        const t = this;
        firebase.auth().confirmPasswordReset(this.props.code, this.state.password)
            .then(()=> {
                t.props.changeAction();
            })
    }

    render() {
        return (
            <div className="change-password">
                <h1>NEW PASSWORD</h1>
                        <p>Enter your new password </p>
                        <form>
                            <div className="row">
                                <div className="form-single">
                                    <label htmlFor="password">Password</label>
                                    <input value={this.state.password} onChange={(x) => this.setState({ password: x.target.value })} type="text" name="password" id="password" />
                                </div>
                            </div>

                            <div className="bottom">
                                <a className="btn btn-black" onClick={this.changePassword}>Save Password</a>

                                {/* <div className="options">
                                    <p>Have an account? <a onClick={this.props.changeSection}>Sign in here</a></p>

                                    <a className="fg-password">
                                        Sign in
                                    </a>
                                </div> */}
                            </div>
                        </form>
            </div>
        )
    }
}

export default Confirm
