import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SORTING
} from '../constants/ProductList'
import axios from 'axios' // ajax library


export function loadProducts (settings) {
    return (dispatch) => {
        dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: []
        })

        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            // .get('http://rtivital.github.io/react-challenge-sort-and-search/data.json')
            .then(function(request) {
                setTimeout(() => {
                    dispatch({
                        type: LOAD_PRODUCTS_SUCCESS,
                        payload: request.data
                    })
                }, 400)
            })
            .catch(function() {
                setTimeout(() => {
                    dispatch({
                        type: LOAD_PRODUCTS_ERROR,
                        payload: []
                    })
                }, 400)
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