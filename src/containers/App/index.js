import React, { Component, PropTypes } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import Layout from '../../components/Layout'

class App extends Component {
  componentWillMount() {
    const settings = this.syncSettingsWithUrl() 

    this.props.appActions.changeSettings(settings)
  }
  syncSettingsWithUrl() {
    const settings = this.props.settings
    
    const page = +this.props.match.params.pageNum
    const sort = this.props.match.params.sortType
    const direction = this.props.match.params.direction
    const filter = this.props.match.params.filter ? this.props.match.params.filter : '' 

    if (page) {
        const limit = settings.pagination.limit
        settings.pagination.offset = (page - 1)  * limit

        settings.sort[sort] = true
        settings.sort.direction = direction
        settings.filter.text = filter
    }

    return settings
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