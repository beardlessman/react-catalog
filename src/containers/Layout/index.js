import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Content from '../Content'
import './style.css'

class Layout extends Component {
  render() {
    const { header, content, footer } = this.props
    const contentActions = this.props.contentActions
    return (
      <div className="layout">
        <div className="layout__header">
          <Header data={header}/>
        </div>
        <div className="layout__content">
          <Content data={content} actions={contentActions} className="layout__content"/>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    header: state.header,
    footer: state.simple
  }
}

export default connect(mapStateToProps)(Layout)