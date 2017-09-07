import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS
} from '../constants/App'
import { push } from 'react-router-redux'
import { STORE } from '../index.js'
import axios from 'axios'

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

function getUrlBySettings(settings) {
    let filterText = settings.filter.text
    let page = ( settings.pagination.offset / settings.pagination.limit ) + 1
    let sort = sortType()
    let direction = settings.sort.direction

    function sortType () {
        for (var key in settings.sort) {
            if (settings.sort[key] === true) {
                let sort = key
                if ( sort === 'direction' ) {
                    sort = 'id'
                }
                return sort
            }
        }
    }
    
    return `/q=${filterText}&sort=${sort}&direction=${direction}&page=${page}`
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