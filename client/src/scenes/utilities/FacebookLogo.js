import React, { Component } from 'react'

export class FacebookLogo extends Component {
    render() {
        return (
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M14.172 2.65084e-08H0.827293C0.370331 0.000228908 -0.000114414 0.370903 2.65084e-08 0.82798V14.1727C0.000228908 14.6297 0.370903 15.0001 0.82798 15H14.172C14.6292 15.0001 14.9999 14.6296 15 14.1724C15 14.1722 15 14.1721 15 14.172V0.827293C14.9998 0.370331 14.6291 -0.000114414 14.172 2.65084e-08Z" fill="black" />
                    <path className="fb" d="M10.3564 14.9998V9.199H12.312L12.605 6.92849H10.3564V5.48241C10.3564 4.82655 10.5385 4.37966 11.479 4.37966H12.6709V2.3544C12.4635 2.32682 11.7521 2.26514 10.9242 2.26514C9.19567 2.26514 8.0127 3.31982 8.0127 5.25754V6.92849H6.06445V9.199H8.0127V14.9998H10.3564Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="15" height="15" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    }
}

export default FacebookLogo
