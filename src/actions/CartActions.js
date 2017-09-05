import { 
    ADD_ITEM_TO_CART,
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
export function clearCart () {
    return (dispatch) => {
        dispatch({
            type: CLEAR_CART,
            payload: []
        })
    }
}