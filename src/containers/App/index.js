import React, { Component, PropTypes } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import Layout from '../Layout'

class App extends Component {
  componentWillMount() {
    const settings = this.props.settings
    const page = +this.props.match.params.page
    if (page) {
        const limit = settings.pagination.limit
        settings.pagination.offset = (page - 1)  * limit
    }
    this.props.appActions.changeSettings(settings)
  } 
  render() {
    return (
      <Route component={Layout} />
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.app.settings
  }
}
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)