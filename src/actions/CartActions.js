import { 
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CHANGE_ITEM_QUANTITY_IN_CART,
    CLEAR_CART
} from '../constants/Cart'

export function addItemToCart (item) {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: item
        })
    }
}

export function removeItemFromCart (item) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: item
        })
    }
}

export function changeItemQuantity (item, quantity) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ITEM_QUANTITY_IN_CART,
            payload: item,
            quantity: quantity
        })
    }
}

export function clearCart () {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART,
            payload: []
        })
    }
}