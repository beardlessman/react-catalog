import React, { Component, PropTypes } from 'react'
import Simple from '../../components/Simple'
import UserWrap from '../UserWrap'
import './style.css'

export default class Content extends Component {
  render() {
    const { user, simple } = this.props.data
    const actions = this.props.actions
    return (
      <div className='content'>
        <UserWrap />
        <Simple data={simple} changeHello={actions.changeHello} />
      </div>
    )
  }
}