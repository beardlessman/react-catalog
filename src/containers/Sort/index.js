import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'
import Button from '../../components/Button'

class Sort extends Component {
    
    changeSorting(type) {
      const actions = this.props.actions
      const sortSettings = this.props.settings.sort
      let direction = sortSettings.direction

      const typeSet = sortSettings[type] ? false : true

      if (typeSet == false) {
        return false
      }

      let newSettings = {}
      for (var key in this.props.settings) {
        newSettings[key] = this.props.settings[key];
      }

      for (var key in newSettings.sort) {
          newSettings.sort[key] = false
      }
      newSettings.sort.direction = direction
      newSettings.sort[type] = typeSet

      actions.changeSettings(newSettings)
    }
    changeDirection = () => {
      const actions = this.props.actions
      const settings = this.props.settings.sort
      let direction = -settings.direction

      let newSettings = {}
      for (var key in this.props.settings) {
        newSettings[key] = this.props.settings[key];
      }

      newSettings.sort.direction = direction

      actions.changeSettings(newSettings)
    }

    render() {
        const sort = this.props.settings.sort
        return (
            <div className="sort">
                <button onClick={() => this.changeSorting('id')} className={sort.id ? 'sort-btn active' : 'sort-btn'}>Default</button>
                <button onClick={() => this.changeSorting('abc')} className={sort.abc ? 'sort-btn active' : 'sort-btn'}>Sort by name</button>
                <button onClick={() => this.changeSorting('price')} className={sort.price ? 'sort-btn active' : 'sort-btn'}>Sort by price</button>

                <Button onClick={this.changeDirection} mod={(sort.direction > 0) ? '_dirup' : '_dirdown'} ></Button>
            </div>
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
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)