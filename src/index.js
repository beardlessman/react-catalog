import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import App from './containers/App'
import './app.css'  
import { configureStore, history } from './store/configureStore'
import { ConnectedRouter, push } from 'react-router-redux'

export const STORE = configureStore();

render(
    <Provider store={STORE}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/page=:page" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)