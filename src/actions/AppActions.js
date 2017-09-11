import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS,
    CHANGE_VIEW_LIST
} from '../constants/App';
import { push } from 'react-router-redux';
import { STORE } from '../index.js';
import { getUrlBySettings } from '../helpers/appHelpers.js';
import { getData } from '../api/appAPI.js';


export function changeSettings (settings) {
    return (dispatch) => {

        const url = getUrlBySettings(settings);
        STORE.dispatch(push(url));

        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        });

        getData(loadRequest, successRequest, errorRequest);
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

function loadRequest (dispatch) {
    STORE.dispatch({
        type: LOAD_PRODUCTS_REQUEST,
        payload: []
    });
}
function successRequest(request, dispatch) {
    STORE.dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: request.data,
        meta: request.meta
    });
}
function errorRequest(dispatch, request) {
    STORE.dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: request.data,
        meta: request.meta
    });
}