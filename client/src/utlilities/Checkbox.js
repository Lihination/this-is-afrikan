import React, { Component } from 'react'

export class Checkbox extends Component {
    render() {
        return (
            <label class="check-container">{this.props.title}
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
            </label>
        )
    }
}

export default Checkbox
