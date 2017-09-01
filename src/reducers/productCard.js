import { 
    ADD_ITEM_TO_CART
} from '../constants/ProductCard'

export const initialState = {
    
};
  
export default function productCard(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {...state, data: action.payload}
        default:
            return state;
    }
}