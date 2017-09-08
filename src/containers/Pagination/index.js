import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import makeBtnsDataH from '../../helpers/paginationHelper.js'
import './style.css'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.total = this.props.meta.total
        this.limit = this.props.settings.pagination.limit
    };
    componentDidMount() {
        // get total count products -> this.total
        // get initial limit -> this.limit
        // push pagination settings to state (no eto ne tochno)
    };
    changeSettings = (e) => {
        const prevSettings = this.props.settings
        let offset = this.limit * e.target.getAttribute('data-target') - this.limit
        let newSettings = {...prevSettings, pagination: {limit: this.limit, offset: offset}}
        this.props.appActions.changeSettings(newSettings)
    };
    makeBtnsArray() {
        let pages = this.total / this.limit;
        let currentPage = ( this.props.settings.pagination.offset / this.limit ) + 1;
            
        let buttons = makeBtnsDataH(pages, currentPage);
        return buttons.map((item, id) => {
            return (
                <button
                    key={id}
                    className={item.className}
                    data-target={item.dataTarget}
                    onClick={this.changeSettings}>
                    {item.text}
                </button>
            )
        });
    };
    render() {
        let buttons = this.makeBtnsArray()

        return (
            <div>
                <div className="pagination">
                    {buttons}
                </div>
            </div>
        )
    };
}

function mapStateToProps (state) {
  return {
    settings: state.app.settings,
    meta: state.app.meta
  }
}
function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)