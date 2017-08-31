import { 
    CHANGE_HELLO_REQUEST, 
    CHANGE_HELLO_SUCCESS,
    CHANGE_HELLO_ERROR  
} from '../constants/Content'

const initialState = {
    // hello: 'Привет',
    // name: 'Юзернейм',
    // fetching: false,
    // error: false
};
  
export default function content(state = initialState, action) {
    switch (action.type) {
        case CHANGE_HELLO_REQUEST:
            return {...state, hello: action.payload, fetching: true}
        case CHANGE_HELLO_SUCCESS:
            return {...state, hello: action.payload, fetching: false}
        case CHANGE_HELLO_ERROR:
            return {...state, fetching: false, error: true}
        default:
            return state;
    }
}