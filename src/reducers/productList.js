import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SORTING
} from '../constants/ProductList'

export const initialState = {
    data: [],
    fetching: true,
    error: false,
    sortSettings: {
        id: true,
        abc: false,
        price: false,
        direction: 1
    }
};
  
export default function user(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
            return {...state, data: action.payload, fetching: true}
        case LOAD_PRODUCTS_SUCCESS:
            return {...state, data: action.payload, fetching: false, error: false}
        case LOAD_PRODUCTS_ERROR:
            return {...state, data: action.payload, error: true, fetching: false}
        case CHANGE_SORTING:
            return {...state, sortSettings: action.payload}
        default:
            return state;
    }
}