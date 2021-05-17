import React, { Component } from 'react';
import OracleLogo from './../utilities/OracleLogo';
import {Link} from 'react-router-dom';
export class Oracle extends Component {
    render() {
        return (
            <Link to="/defy"  className="oracle">
                <OracleLogo />
            </Link>
        )
    }
}

export default Oracle
