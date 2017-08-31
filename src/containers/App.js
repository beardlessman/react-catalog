import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Simple from '../components/Simple'
import User from '../components/User'
import * as userActions from '../actions/UserActions'

class App extends Component {
  render() {
    const { user, simple } = this.props
    const { changeHello } = this.props.userActions
    return (
      <div>
        <User data={user} changeHello={changeHello} fetching={user.fetching} />
        <Simple data={simple} changeHello={changeHello} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    simple: state.simple
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)