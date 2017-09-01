import { 
    ADD_ITEM_TO_CART,
    CLEAR_CART
} from '../constants/Cart'

const initialState = {
    items: []
};
  
export default function cart(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {...state, items: action.payload}
        case CLEAR_CART:
            return {...state, items: action.payload}
        default:
            return state;
    }
}