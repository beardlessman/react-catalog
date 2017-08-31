import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR
} from '../constants/ProductList'
import axios from 'axios' // ajax library


export function loadProducts (hello) {
    return (dispatch) => {
        dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: []
        })

        axios
            .get('https://jsonplaceholder.typicode.com/albums')
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
                        payload: [1]
                    })
                }, 400)
            })
    }
}