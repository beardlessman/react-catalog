import React, { Component } from 'react'
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

      if (typeSet === false) {
        return false
      }

      let newSettings = {}
      for (let key in this.props.settings) {
        newSettings[key] = this.props.settings[key];
      }

      for (let key in newSettings.sort) {
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
                Сортировка:
                <div className="btn-group">
                    <Button onClick={() => this.changeSorting('id')} mod={sort.id ? ' active' : ''}>By ID</Button>
                    <Button onClick={() => this.changeSorting('abc')} mod={sort.abc ? '  active' : ''}>By name</Button>
                    <Button onClick={() => this.changeSorting('price')} mod={sort.price ? ' active' : ''}>By price</Button>
                </div>

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