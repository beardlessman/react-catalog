import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SORTING,
    CHANGE_SETTINGS
} from '../constants/ProductList'
import axios from 'axios' // ajax library


export function loadProducts (settings) {
    return (dispatch) => {
        dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: []
        })

        var root = 'https://jsonplaceholder.typicode.com/posts';        

        axios
            .get(root, {
                params: settings
              })
            // .get('http://rtivital.github.io/react-challenge-sort-and-search/data.json')
            .then(function(request) {
                console.log(request)
                setTimeout(() => {
                    dispatch({
                        type: LOAD_PRODUCTS_SUCCESS,
                        payload: request.data
                    })
                }, 100)
            })
            .catch(function() {
                setTimeout(() => {
                    dispatch({
                        type: LOAD_PRODUCTS_ERROR,
                        payload: []
                    })
                }, 100)
            })
    }
}
export function changeSorting (settings) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SORTING,
            payload: settings
        })
    }
}
export function changeSettings (settings) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        })
    }
}