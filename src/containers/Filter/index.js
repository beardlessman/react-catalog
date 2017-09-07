import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as filterActions from '../../actions/FilterActions'
import * as appActions from '../../actions/AppActions'
import './style.css'

class Filter extends Component {
    
    inputFilterText = (e) => {
      e.preventDefault()
      const actions = this.props.filterActions
      const listActions = this.props.appActions
      const filterText = document.getElementById("filterText").value

      let newSettings = {}
      for (var key in this.props.settings) {
        newSettings[key] = this.props.settings[key];
      }

      newSettings.filter.text = filterText
      newSettings.pagination.offset = 0

      listActions.changeSettings(newSettings)
      actions.inputFilterText(filterText)
    }

    inputHandler = (e) => {
      const actions = this.props.filterActions
      actions.changeInputText(e.target.value)
    }

    render() {
        const filter = this.props.filter
        const settings = this.props.settings
        return (
            <div className="filter">
                <form onSubmit={this.inputFilterText}>
                  <div className="input">
                    <input 
                      id="filterText" 
                      className="input__field"
                      type="text" 
                      placeholder="Search..." 
                      value={filter.inputText} 
                      onChange={this.inputHandler}/>
                    <button type="submit" className="input__btn">GO</button>
                  </div>
                </form>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filter: state.filter,
    settings: state.app.settings
  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(filterActions, dispatch),
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)