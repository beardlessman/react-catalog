import { 
    INPUT_FILTER_TEXT,
    CHANGE_INPUT_TEXT
} from '../constants/Filter'

export const initialState = {
    filterText: '',
    inputText: ''
};

export default function filter(state = initialState, action) {
    switch (action.type) {
        case INPUT_FILTER_TEXT:
            return {...state, filterText: action.payload}
        case CHANGE_INPUT_TEXT:
            return {...state, inputText: action.payload}
        default:
            return state;
    }
}