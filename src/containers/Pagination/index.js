import React, { Component, PropTypes } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.total = 100
        this.limit = this.props.settings.pagination.limit
    }
    componentDidMount() {
        // get total count products -> this.total
        // get initial limit -> this.limit
        // push pagination settings to state (no eto ne tochno)
    }
    changeSettings = (e) => {
        const prevSettings = this.props.settings
        let offset = this.limit * e.target.getAttribute('data-target') - this.limit
        let newSettings = {...prevSettings, pagination: {limit: this.limit, offset: offset}}
        this.props.appActions.changeSettings(newSettings)
    }
    makeBtnsArray() {
        let pages = this.total / this.limit
        let buttons = []
        let currentPage = ( this.props.settings.pagination.offset / this.limit ) + 1

        if (currentPage > 1) {
            buttons.push(
                <Link 
                    to={`/page=${currentPage-1}`} 
                    key="prev" 
                    className="pagination__item pagination__item-prev"  
                    onClick={this.changeSettings} 
                    data-target={currentPage - 1}>
                    prev
                </Link>
            )
        }

        for (let i = currentPage-2; i < currentPage + 3; i++) {
            if (i == currentPage) {
                buttons.push(
                    <Link 
                        to={`/page=${i}`} 
                        key={i} 
                        className="pagination__item current" 
                        data-target={i}>
                        {i}
                    </Link>
                )  
            } else if (i > pages) {
                buttons.push()
            } else if (i < 1) {
                buttons.push()
            } else {
                buttons.push(
                    <Link 
                        to={`/page=${i}`} 
                        key={i} 
                        className="pagination__item" 
                        onClick={this.changeSettings} 
                        data-target={i}>
                        {i}
                    </Link>
                )   
            }
        }

        if (currentPage < pages) {
            buttons.push(
                <Link 
                    to={`/page=${currentPage + 1}`} 
                    key="next" 
                    className="pagination__item pagination__item-next" 
                    onClick={this.changeSettings} 
                    data-target={currentPage + 1}>
                    next
                </Link>
            )
        }

        return buttons
    }
    render() {
        let buttons = this.makeBtnsArray()
        console.log(this.props.settings.pagination.offset)

        return (
                <div>
                    <div className="pagination">
                        {buttons}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)