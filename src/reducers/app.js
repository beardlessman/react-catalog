import { 
    LOAD_PRODUCTS_REQUEST, 
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    CHANGE_SETTINGS
} from '../constants/App'

export const initialState = {
    data: [],
    fetching: true,
    error: false,
    settings: {
        sort: {
            id: false,
            abc: false,
            price: false,
            direction: 1
        },
        filter: {
            text: ''
        }, 
        pagination: {
            limit: 10,
            offset: 0
        }
    },
    meta: {
        total: 100
    }
};
  
export default function app(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS_REQUEST:
            return {...state, data: action.payload, fetching: true}
        case LOAD_PRODUCTS_SUCCESS:
            return {...state, data: action.payload, fetching: false, error: false, meta: {total: 100}}
        case LOAD_PRODUCTS_ERROR:
            return {...state, data: action.payload, error: true, fetching: false}
        case CHANGE_SETTINGS:
            return {...state, settings: action.payload}
        default:
            return state;
    }
}