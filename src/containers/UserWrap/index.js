import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../actions/UserActions'
import User from '../../components/User'

class UserWrap extends Component {
  render() {
    const { user } = this.props
    const actions = this.props.userActions
    return (
        <User data={user} fetching={user.fetching} resetHello={actions.resetHello} />
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWrap)