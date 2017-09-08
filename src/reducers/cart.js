import { 
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CHANGE_ITEM_QUANTITY_IN_CART,
    CLEAR_CART
} from '../constants/Cart';
import {
    addItemToArray,
    removeItemFromArray,
    changeItemQuantity
} from '../helpers/cartHelpers.js';

const initialState = {
    items: []
};
  
export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const newItems = addItemToArray(state.items, action.payload);
            return {...state, items: newItems};
        }
        case REMOVE_ITEM_FROM_CART: {
            const newItems = removeItemFromArray(state.items, action.payload);
            return {...state, items: newItems};
        }
        case CHANGE_ITEM_QUANTITY_IN_CART: {
            const newItems = changeItemQuantity(state.items, action.payload, action.quantity);
            return {...state, items: newItems};
        }
        case CLEAR_CART:
            return {...state, items: action.payload}
        default:
            return state;
    }
}