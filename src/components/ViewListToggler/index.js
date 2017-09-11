import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../../actions/AppActions'
import './style.css'
import Button from '../../components/Button'

export default class ViewListToggler extends Component {
    toggleView = () => {
        let view = this.props.view;
        if (view === 'grid') {
            view = 'list';
        } else {
            view = 'grid';
        }

        this.props.action(view);
    };
    render() {
        const view = this.props.view;
        return (
            <div className="viewToggler">
                Отображение:
                <div className="btn-group">
                    <Button onClick={this.toggleView} mod={ (view === 'grid') ? ' active' : ''}>Сетка</Button>
                    <Button onClick={this.toggleView} mod={ (view === 'list') ? ' active' : ''}>Список</Button>
                </div>
            </div>
        )
    };
}