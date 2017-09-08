import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../../actions/AppActions';
import Layout from '../../components/Layout';
import { syncSettingsWithUrl } from '../../helpers/appHelpers.js';

class App extends Component {
  componentWillMount() {
    const settings = syncSettingsWithUrl(this.props.settings, this.props.match.params);
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