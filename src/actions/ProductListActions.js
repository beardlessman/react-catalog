import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS
} from '../constants/ProductList'
import axios from 'axios' // ajax library


export function loadProducts (settings) {
    return (dispatch) => {
        dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: []
        })

        var root = 'https://jsonplaceholder.typicode.com/posts'
        // var root2 = '/comments'

        axios
            // .get(root2)
            .get(root, {
                params: settings
            })
            .then(function(request) {
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
export function changeSettings (settings) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        })
    }
}