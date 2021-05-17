import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import logo_white from './../../images/logo_white.png';
// import logo from './../../images/footer-img.png';
import PackageLogo from '../utilities/PackageLogo';
import ShoppingbagLogo from '../utilities/ShoppingbagLogo';
import AccountLogo from '../utilities/AccountLogo';
import UserDropDown from './../_layout/UserDropDown';
import firebase from './../../services/firebase';
const user_ref = firebase.firestore().collection("users");
export class Top extends Component {
    constructor(props){
        super(props);

        this.state={
            signIn: false,
            firstname: "",
            lastname: ""
        }
    }

    componentDidMount() {
        const t = this;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    signIn: true
                })
                user_ref.where("user", "==", user.uid)
                .get()
                .then(query=> {
                    query.forEach((doc)=>{
                        const { first_name, last_name} = doc.data();
                        t.setState({
                            firstname: first_name,
                            lastname: last_name
                        });
                    })
                })
            }
            else {
                this.setState({
                    signIn: false
                })
            }
        })
    }

    render() {
        return (
            <div className="top">
                <div className="container">
                    <div className="logo">
                        <img src={"https://res.cloudinary.com/thisisafrikan-com/image/upload/v1615215759/logo_white_z9edon.png"} alt="This is afrikan logo" />
                    </div>

                    <ul className="right">
                        {/* <li><a onClick={(e) => {e.preventDefault(); window.open(this.props.checkout.webUrl)}}><PackageLogo />Track my order</a> </li> */}
                        {/* <li><a onClick={() => this.props.openCart()}><ShoppingbagLogo />Shopping bag</a> </li> */}
                        {/* <li>
                            <Link to={{ pathname: 'login' }}>
                                <AccountLogo />Sign In
                            </Link>
                        </li>  */}

                        {/* {
                                this.state.signIn ? <Fragment>
                                    <UserDropDown history={this.props.history} />
                                </Fragment>
                                    :
                                    <li>
                                        <Link to={{ pathname: 'login' }}>
                                            <AccountLogo />Sign In
                                        </Link>
                                    </li>
                            }   
                        */}
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Top
