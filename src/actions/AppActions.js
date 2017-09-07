import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS
} from '../constants/App'
import axios from 'axios' // ajax library

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

        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        })

        load(dispatch, settings)
    }
}