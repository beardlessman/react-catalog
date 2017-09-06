import React, { Component, PropTypes } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as productListActions from '../../actions/ProductListActions'
import './style.css'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.paginationSettings = this.props.settings.pagination
        this.total = 100
        this.limit = this.paginationSettings.limit
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
        this.props.productListActions.changeSettings(newSettings)
        console.log(newSettings)
    }
    makeBtnsArray() {
        let pages = this.total / this.limit
        let buttons = []
        let currentPage = ( this.props.settings.pagination.offset / this.limit ) + 1

        if (currentPage > 1) {
            buttons.push(<button key="prev" onClick={this.changeSettings} data-target={currentPage - 1}>prev</button>)
        }

        for (let i = currentPage-2; i < currentPage + 3; i++) {
            if (i == currentPage) {
                // buttons.push(<button key={i} className="current" data-target={i}>{i}</button>) 
                buttons.push(<Link key="kek" to="/test"><button>link to test</button></Link>)    
            } else if (i > pages) {
                buttons.push()
            } else if (i < 1) {
                buttons.push()
            } else {
                buttons.push(<button key={i} onClick={this.changeSettings} data-target={i}>{i}</button>)   
            }
        }

        if (currentPage < pages) {
            buttons.push(<button key="next" onClick={this.changeSettings} data-target={currentPage + 1}>next</button>)
        }

        return buttons
    }
    render() {
        let buttons = this.makeBtnsArray()

        return (
            <Router>
                <div>
                    <div className="pagination">
                        Это пагинатор. Он выводит по {this.limit} товаров на странице
                        {buttons}
                    </div>

                    <Route path="/test" component={Test}/>
                </div>
            </Router>
        )
    }
}

const Test = ({ match }) => (
    <div>
      <h2>Test</h2>
    </div>
)

function mapStateToProps (state) {
  return {
    settings: state.productList.settings
  }
}
function mapDispatchToProps(dispatch) {
    return {
        productListActions: bindActionCreators(productListActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)