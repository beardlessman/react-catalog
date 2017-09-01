import { 
    INPUT_FILTER_TEXT
} from '../constants/Filter'

export const initialState = {
    filterText: ''
};

export default function filter(state = initialState, action) {
    switch (action.type) {
        case INPUT_FILTER_TEXT:
            return {...state, filterText: action.payload}
        default:
            return state;
    }
}