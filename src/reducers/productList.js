import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SORTING,
    CHANGE_SETTINGS
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
    },
    settings: {
        sort: {
            id: true,
            abc: false,
            price: false,
            direction: 1
        },
        filter: {
            text: ''
        }, 
        pagination: {
            limit: 20,
            offset: 0
        }
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
        case CHANGE_SETTINGS:
            return {...state, settings: action.payload}
        default:
            return state;
    }
}