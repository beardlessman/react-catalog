import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS,
    CHANGE_VIEW_LIST
} from '../constants/App';
import { push } from 'react-router-redux';
import { STORE } from '../index.js';
import axios from 'axios';
import { getUrlBySettings } from '../helpers/appHelpers.js';

function load (dispatch, settings) {
    dispatch({
        type: LOAD_PRODUCTS_REQUEST,
        payload: []
    })

    var root = 'https://jsonplaceholder.typicode.com/posts?userId=1'
    
    axios
        .get(root, {
            params: settings
        })
        .then(function(request) {
            setTimeout(() => {
                dispatch({
                    type: LOAD_PRODUCTS_SUCCESS,
                    payload: request.data,
                    meta: request.meta
                })
            }, 50)
        })
        .catch(function() {
            setTimeout(() => {
                dispatch({
                    type: LOAD_PRODUCTS_ERROR,
                    payload: []
                })
            }, 50)
        })
}

export function changeSettings (settings) {
    return (dispatch) => {

        const url = getUrlBySettings(settings)
        STORE.dispatch(push(url)) 

        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        })

        load(dispatch, settings)
    }
}

export function changeViewList (view) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_VIEW_LIST,
            payload: view
        });
    }
}