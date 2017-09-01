import { 
    CHANGE_SORTING
} from '../constants/Sort'

export const initialState = {
    settings: {
        id: true,
        abc: false,
        price: false,
        direction: 1
    }
};

export default function sort(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SORTING:
            return {...state, settings: action.payload}
        default:
            return state;
    }
}