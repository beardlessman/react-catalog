import React, { Component, PropTypes } from 'react'
import Simple from '../../components/Simple'
import ProductList from '../ProductList'
import UserWrap from '../UserWrap'
import './style.css'

export default class Content extends Component {
  render() {
    const { user, simple } = this.props.data
    const actions = this.props.actions
    const productlist = [1,2,3,4,5,6,7];
    return (
      <div className="content">
        <ProductList data={productlist}/>
        {/* <UserWrap />
        <Simple data={simple} changeHello={actions.changeHello} /> */}
      </div>
    )
  }
}