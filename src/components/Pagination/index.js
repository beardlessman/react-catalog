import React, { Component } from 'react';
import makeBtnsDataH from '../../helpers/paginationHelper.js';
import './style.css';

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: this.props.total,
            limit: this.props.limit,
            offset: this.props.offset
        };
    };
    componentDidMount() {
        // get total count products -> this.total
        // get initial limit -> this.limit
        // push pagination settings to state (no eto ne tochno)
    };
    changeSettings = (e) => {
        const prevSettings = this.props.fullSettings;
        let offset = this.state.limit * e.target.getAttribute('data-target') - this.state.limit;

        // без этого не работает ПАЧИМУ??
        this.setState({
           offset: offset
        });

        let newSettings = {...prevSettings, pagination: {limit: this.state.limit, offset: offset}};
        this.props.onChangeSettings(newSettings);
    };
    makeBtnsArray() {
        let pages = this.state.total / this.state.limit;
        let currentPage = ( this.state.offset / this.state.limit ) + 1;
            
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
        let buttons = this.makeBtnsArray();

        return (
            <div>
                <div className="pagination">
                    {buttons}
                </div>
            </div>
        )
    };
}