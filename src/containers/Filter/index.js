import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as filterActions from '../../actions/FilterActions'
import './style.css'

class Filter extends Component {
    
    inputFilterText(e) {
        const actions = this.props.filterActions
        const filterText = e.target.value

        actions.inputFilterText(filterText)
    }

    render() {
        const filter = this.props.filter
        return (
            <div className="filter">
                <form>
                    <input type="text" placeholder="Search..." value={filter.filterText} onChange={this.inputFilterText.bind(this)} />
                </form>
            </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    filter: state.filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterActions: bindActionCreators(filterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)