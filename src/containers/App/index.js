import React, { Component, PropTypes } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Layout from '../Layout'

export default class App extends Component {
  render() {
    return (
      <Route component={Layout} />
    )
  }
}