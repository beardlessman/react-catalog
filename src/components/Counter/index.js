import React, { Component, PropTypes } from 'react'
import Button from '../Button'
import './style.css'

export default class Counter extends Component {
    onChange = (e) => {
        this.props.onChange(e)
    }
    onInc = () => {
        this.props.onInc()
    }
    onDec = () => {
        this.props.onDec()
    }
    render() {
        return (
            <div className="counter">
                <div className="counter__dec">
                    <Button onClick={this.onDec} mod="_minus"></Button>
                </div>
                <div className="counter__input">
                    <input type="number" value={this.props.value} onChange={this.onChange} className="input" />
                </div>
                <div className="counter__inc">
                    <Button onClick={this.onInc} mod="_plus"></Button>
                </div>
            </div>
        )
    }
}