import { 
    CHANGE_SORTING
} from '../constants/Sort'

export function changeSorting (settings) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SORTING,
            payload: settings
        })
    }
}