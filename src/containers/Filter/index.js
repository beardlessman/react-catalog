import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'

class Filter extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ''
        };
    }
    inputFilterText = (e) => {
      e.preventDefault()
      const listActions = this.props.appActions
      const filterText = this.state.value;

      let newSettings = {}
      for (var key in this.props.settings) {
        newSettings[key] = this.props.settings[key];
      }

      newSettings.filter.text = filterText
      newSettings.pagination.offset = 0

      listActions.changeSettings(newSettings)
    }

    inputHandler = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="filter">
                <form onSubmit={this.inputFilterText}>
                  <div className="input">
                    <input 
                      id="filterText" 
                      className="input__field"
                      type="text" 
                      placeholder="Search..." 
                      value={this.state.value}
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
    settings: state.app.settings
  }
}
function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)