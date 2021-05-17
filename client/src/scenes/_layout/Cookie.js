import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'universal-cookie';

export class Cookie extends Component {
    componentDidMount(){
        if(localStorage.getItem('cookieAgreement') != 'shown'){
            $(".cookie-banner").delay(6000).fadeIn();
            localStorage.setItem('cookieAgreement','shown')
        }

        const cookies = new Cookies();
        cookies.set('myCat', 'Pacman', { path: '/' });
        // console.log(cookies.get('myCat'));
        
        $('.close').click(function(e) {
          $('.cookie-banner').fadeOut(); 
        });
    }
    render() {
        return (
            <div className="cookie-banner">
                <p>By using our website, you agree to our <a href="insert link">cookie policy</a></p>
                <button className="close">&times;</button>
            </div>
        )
    }
}

export default Cookie
