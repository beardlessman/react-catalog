import React, { Component } from 'react'
import './style.css'

export default class Button extends Component {
    render() {
        let className = `button ${this.props.mod ? ('button_'+this.props.mod+'') : ''} button_style_${this.props.style}`;
        return (
            <button className={className} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}