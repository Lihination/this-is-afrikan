import React, { Component } from 'react';
import firebase from './../../services/firebase';
import Sent from './Sent';
export class Reset extends Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            sent: false
        }
    }

    forgotPassword = () => {
        const t = this;
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then((data)=> {
            console.log(data);
            t.setState({
                sent: true
            })
        })
    }

    render() {
        return (
            this.state.sent?
            <Sent />:
                <div className="reset-password">
                        <h1>PASSWORD RESET</h1>
                        <p>Enter email that you used to sign up</p>
                        <form>
                            <div className="row">
                                <div className="form-single">
                                    <label htmlFor="email">Email</label>
                                    <input value={this.state.email} onChange={(x) => this.setState({ email: x.target.value })} type="text" name="email" id="email" />
                                </div>
                            </div>

                            <div className="bottom">
                                <a className="btn btn-black" onClick={this.forgotPassword}>Send Link</a>

                                <div className="options">
                                    <p>Have an account? <a onClick={this.props.changeSection}>Sign in here</a></p>

                                    {/* <a className="fg-password">
                                        Sign in
                                    </a> */}
                                </div>
                            </div>
                        </form>
                    </div>
        )
    }
}

export default Reset
