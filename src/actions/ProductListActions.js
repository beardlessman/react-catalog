import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS
} from '../constants/ProductList'
import axios from 'axios' // ajax library
import $ from 'jquery'

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
                    payload: request.data
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
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * letters.length)];
    }
    return color;
}
function someSideEffect() {
    $('.header__inner').css({background: getRandomColor()})
}

export function loadProducts (settings) {
    return (dispatch) => {
        load(dispatch, settings)
    }
}
export function changeSettings (settings) {
    return (dispatch) => {
        someSideEffect()

        dispatch({
            type: CHANGE_SETTINGS,
            payload: settings
        })

        load(dispatch, settings)
    }
}