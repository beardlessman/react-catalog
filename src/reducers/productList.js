import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR
} from '../constants/ProductList'

export const initialState = {
    data: [],
    fetching: true,
    error: false
};
  
export default function user(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
            return {...state, data: action.payload, fetching: true}
        case LOAD_PRODUCTS_SUCCESS:
            return {...state, data: action.payload, fetching: false, error: false}
        case LOAD_PRODUCTS_ERROR:
            return {...state, data: action.payload, error: true, fetching: false}
        default:
            return state;
    }
}