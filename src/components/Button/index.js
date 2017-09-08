import React, { Component } from 'react'
import './style.css'

export default class Button extends Component {
    render() {
        let className = 'button'
        if (this.props.mod) {
            className = className + ' ' + className + this.props.mod
        }
        return (
            <button className={className} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}